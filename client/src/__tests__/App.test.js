import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import About from '../pages/About'; 
import AddPin from '../pages/AddPin';
import AdminBoard from '../pages/AdminBoard';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';
import Success from '../pages/Success';

// Mock the global fetch
// We use this for testing Home.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), 
  })
);

describe('route resolving', () => {
  beforeEach(() => {
    // Clear mock calls and instances before each test
    fetch.mockClear();
    fetch.mockResolvedValue({
        json: () => Promise.resolve([]), 
    });
  });
  
  // Test for navigating to a non-existing route
  test('landing on a bad route shows NotFound component', async () => {
    window.history.pushState({}, '', '/non-existent-route');
    render(<App />); // Directly render App without wrapping in BrowserRouter

    await waitFor(() => {
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });

  // ABOUT
  test('renders /about component and checks for content', () => {
    render(<About />);
    const aboutElement = screen.getByTestId('about');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('About');
  });


// ADDPIN
test('fills out and submits AddPin form', async () => {
    render(
      <MemoryRouter>
        <AddPin />
      </MemoryRouter>
    );

    // Assuming AddPin component is rendered and the form is available immediately
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name:/i), { target: { value: 'Hewlett' } });
    fireEvent.change(screen.getByLabelText(/Last Name:/i), { target: { value: 'De Lara' } });
    fireEvent.change(screen.getByLabelText(/University of Portland Email:/i), { target: { value: 'delara23@up.edu' } });
    fireEvent.change(screen.getByLabelText(/Location:/i), { target: { value: 'Portland' } });
    
    // For dropdowns, you might need to select the option differently
    fireEvent.change(screen.getByLabelText(/What did you travel for?/i), { target: { value: 'study abroad' } });

    fireEvent.change(screen.getByLabelText(/Tell us about your experience:/i), { target: { value: 'It was an enlightening journey.' } });

    // Submit the form
    fireEvent.submit(screen.getByTestId('addpin'));

  });


  // ADMINBOARD
  test('navigating to /admin renders the AdminBoard component', async () => {
    window.history.pushState({}, '', '/AdminBoard');
    render(<AdminBoard />);

    await waitFor(() => {
      expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
    }); // This was missing the closing bracket and parenthesis
  });

  // CONTACT
  test('navigating to /contact renders the Contact component', async () => {
    window.history.pushState({}, '', '/Contact');
    render(<Contact />); // Renders the App component which should handle routing

    // Check for elements unique to the Contact component
    await waitFor(() => {
      // For example, checking for the header text
      expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
      // If using testId, you could also do:
      expect(screen.getByTestId('contact')).toBeInTheDocument();
    });
  });

  // ERROR
  test('renders correctly with expected content in /error', () => {
    render(<Error />);

    const errorElement = screen.getByTestId('error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Error');
  });

  // HELP
  test('navigating to /help renders the Help component', async () => {
    window.history.pushState({}, '', '/help');
    render(<Help />);
    await waitFor(() => {
      expect(screen.getByTestId('help')).toBeInTheDocument();
      expect(screen.getByText(/Help Page/i)).toBeInTheDocument();
    });
  });

  // HOME
  test('renders /home and displays content after fetching data', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Wait for the component to update based on the mock fetch
    await waitFor(() => {
      // Check for navbar and world map
      expect(screen.getByTestId('home')).toBeInTheDocument();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('worldmap')).toBeInTheDocument();
    });
  });

  // LOGIN
  test('/test navigation renders correctly and displays the expected content', () => {
    render(<Login />);

    const loginElement = screen.getByTestId('login');
    expect(loginElement).toBeInTheDocument();
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  // NOTFOUND
  test('/notfound navigation renders correctly and displays the expected content', () => {
    render(<NotFound />);

    const notfoundElement = screen.getByTestId('notfound');
    expect(notfoundElement).toBeInTheDocument();
    expect(screen.getByText(/NOT FOUND/i)).toBeInTheDocument();
  });

  // SEARCH
  test('renders the /search component and displays content after fetching mock data', async () => {
    // Mock fetch response for experiences data
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([
        // Mock Data
        {
          name: { firstName: "Hewlett", lastName: "De Lara" },
          contact: { email: "delara23@up.edu" },
          body: { location: { country: "United States", region: "Oregon" } }
        }
      ]),
    });

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    // Wait for the component to update based on the mock fetch
    await waitFor(() => {
      expect(screen.getByTestId('search')).toBeInTheDocument();
      expect(screen.getByText(/Hewlett De Lara/i)).toBeInTheDocument();
    });

    // Test search functionality
    fireEvent.change(screen.getByPlaceholderText('Search Location...'), { target: { value: 'United States' } });
    await waitFor(() => {
      expect(screen.getByText(/Oregon/i)).toBeInTheDocument();
    });
  });

  // SUCCESS
  test('renders the /success component with expected content', () => {
    render(
      <MemoryRouter>
        <Success />
      </MemoryRouter>
    );
  
    const successElement = screen.getByTestId('success');
    expect(successElement).toBeInTheDocument();
  
    // Check for the main thank you message
    expect(screen.getByText(/Thank you for your submission!/i)).toBeInTheDocument();
  
    // Check for the detailed message
    expect(screen.getByText(/Your input will be reviewed and a copy of your response will be sent to your email./i)).toBeInTheDocument();
  
    // Check for the "Submit Another Pin" link
    const submitAnotherPinLink = screen.getByText(/Submit Another Pin/i);
    expect(submitAnotherPinLink).toBeInTheDocument();
    expect(submitAnotherPinLink).toHaveAttribute('href', '#');
  
    // Check for the "Home" link
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '#');
  });

});
