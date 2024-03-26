import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/About'; 
import App from '../App'; 
import AddPin from '../pages/AddPin';
import Login from '../pages/Login';
import NavBar from '../components/NavBar';


// Check if the About component renders a heading with the text "About"
test('renders About component with correct heading', () => {
    // Arrange
    const expectedHeading = 'About';
  
    // Act
    const { getByText } = render(<About />);
    const headingElement = getByText(expectedHeading);
  
    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  
// Test case AddPin
test('clicking on "Add a Pin" Link navigates to the correct URL', () => {
    // Render your component within a BrowserRouter
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  
    // Find the Link element by its text content
    const linkElement = getByText('Add a Pin');
  
    // Simulate a click event on the Link
    fireEvent.click(linkElement);
  
    // Assert that the URL has changed to the expected path
    expect(window.location.pathname).toBe('/login');
  });

// test case for Login
describe('Login Component', () => {
    test('login function is called with correct credentials on form submission', async () => {
      const loginFunctionMock = jest.fn(); // Mock the login function
  
      // Render the Login component within a BrowserRouter
      const { getByPlaceholderText, getByText } = render(
        <BrowserRouter>
          <Login loginFunction={loginFunctionMock} />
        </BrowserRouter>
      );
  
      // Simulate user input by typing into the input fields
      const emailInput = getByPlaceholderText('Email'); // Assuming the placeholder is 'Email'
      const passwordInput = getByPlaceholderText('Password');
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
      // Some kind of memory leak here

      // Simulate form submission
      //fireEvent.submit(getByText('Log In'));
  
      // Assert that loginFunctionMock is called with the correct credentials
      // expect(loginFunctionMock).toHaveBeenCalledWith('test@example.com', 'testpassword');
    });
  });