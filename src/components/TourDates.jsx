import React from 'react';

const TourDates = () => {
  return (
    <div>
      <h1>Tour Dates</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Venue</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>March 5, 2025</td>
            <td>Los Angeles</td>
            <td>The Roxy</td>
            <td><a href="#">Buy Tickets</a></td>
          </tr>
          <tr>
            <td>March 10, 2025</td>
            <td>New York</td>
            <td>Madison Square Garden</td>
            <td><a href="#">Buy Tickets</a></td>
          </tr>
          <tr>
            <td>March 15, 2025</td>
            <td>New Jersey</td>
            <td>Metlife Stadium</td>
            <td><a href="#">Buy Tickets</a></td>
          </tr><tr>
            <td>March 20, 2025</td>
            <td>Texas</td>
            <td>AT&T Stadium</td>
            <td><a href="#">Buy Tickets</a></td>
          </tr><tr>
            <td>March 10, 2025</td>
            <td>Atlanta</td>
            <td>Mercedes-Benz Stadium</td>
            <td><a href="#">Buy Tickets</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TourDates;
