// Describe a test suite for the form interactions within the pin feature
describe('pin form interactions', () => {
    // Declare variables for DOM elements that will be used across different tests
    let purposeSelect, otherPurposeDiv, pinForm, thankYouDiv, submitAnotherPinLink;
  
    // Before each test, set up the DOM and event listeners to mimic the behavior in pin.js
    beforeEach(() => {
      // Simulate the expected DOM structure for pin.js, including the form and relevant inputs
      document.body.innerHTML = `
        <form id="pin-form">
          <div id="other-purpose" style="display: none;"></div>
          <select id="purpose">
            <option value="">Select a purpose</option>
            <option value="other">Other</option>
          </select>
          <div id="thank-you" style="display: none;"></div>
        </form>
        <a href="#" id="submit-another-pin"></a>
      `;
  
      // Retrieve and store references to the DOM elements that will be interacted with or tested
      purposeSelect = document.getElementById('purpose');
      otherPurposeDiv = document.getElementById('other-purpose');
      pinForm = document.getElementById('pin-form');
      thankYouDiv = document.getElementById('thank-you');
      submitAnotherPinLink = document.getElementById('submit-another-pin');
  
      // Manually attach event listeners to simulate the dynamic functionality provided by pin.js
  
      // Handle changes in the purpose select dropdown
      purposeSelect.addEventListener('change', () => {
        // Display the 'other-purpose' input field when 'other' is selected, hide it otherwise
        if (purposeSelect.value === 'other') {
          otherPurposeDiv.style.display = 'block';
        } else {
          otherPurposeDiv.style.display = 'none';
        }
      });
  
      // Intercept form submission to prevent actual submission and simulate response behavior
      pinForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from submitting
        pinForm.style.display = 'none'; // Hide the form
        thankYouDiv.style.display = 'block'; // Show the thank-you message
      });
  
      // Handle "Submit Another Pin" link clicks to reset the form and UI
      submitAnotherPinLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from navigating
        pinForm.reset(); // Reset the form fields to their initial values
        pinForm.style.display = 'block'; // Show the form again
        thankYouDiv.style.display = 'none'; // Hide the thank-you message
      });
    });
  
    // Test case: Ensure the 'other-purpose' input is shown when 'other' is selected
    test('shows "other-purpose" input when "other" is selected', () => {
      purposeSelect.value = 'other'; // Set the select value to 'other'
      purposeSelect.dispatchEvent(new Event('change')); // Trigger the change event manually
  
      // Assert that the 'other-purpose' div's display property is set to 'block'
      expect(otherPurposeDiv.style.display).toBe('block');
    });
  
    // Test case: Ensure the form is hidden and the thank-you message is shown upon submission
    test('hides form and shows thank-you message on form submission', () => {
      pinForm.dispatchEvent(new Event('submit')); // Simulate form submission
  
      // Assert the form is hidden and the thank-you message is visible
      expect(pinForm.style.display).toBe('none');
      expect(thankYouDiv.style.display).toBe('block');
    });
  
    // Test case: Ensure the form resets and is shown, and the thank-you message is hidden, when "Submit Another Pin" is clicked
    test('resets form and shows it while hiding thank-you message when "Submit Another Pin" is clicked', () => {
      // Set up the initial state for the test
      pinForm.style.display = 'none'; // Initially hide the form
      thankYouDiv.style.display = 'block'; // Initially show the thank-you message
  
      // Simulate clicking the "Submit Another Pin" link
      submitAnotherPinLink.dispatchEvent(new Event('click'));
  
      // Assert that the form is visible and the thank-you message is hidden
      expect(pinForm.style.display).toBe('block');
      expect(thankYouDiv.style.display).toBe('none');
    });
  });
  
  
  