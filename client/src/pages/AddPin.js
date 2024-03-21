import React from 'react';
import '../static/css/pages/AddPin.css';

const AddPin = () => {
  return (
    <div>
      <header>
        <h1>Add a Pin to the map</h1>
      </header>
      <main>
        <form action="/success" method="get" id="pin-form" data-testid="addpin">
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" required></input>
          </div> 
          <div className="form-group">
            <label htmlFor="email">University of Portland Email:</label>
            <input type="text" id="email" name="email" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter a location" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="purpose">What did you travel for?</label>
            <select id="purpose" name="purpose" required>
              <option value="international work">International Work</option>
              <option value="volunteer work">Volunteer Work</option>
              <option value="study abroad">Study Abroad</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group" id="other-purpose">
            <label htmlFor="other-purpose-input">Please specify:</label>
            <input type="text" id="other-purpose-input" name="other-purpose-input"></input>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Tell us about your experience:</label>
            <textarea id="experience" name="experience" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default AddPin;

