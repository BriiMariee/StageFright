import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Stage Fright</h1>
      <p>Your source for the latest music, tours, and merch!</p>
      <div>
      <h1>Song Release Dates</h1>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Electric Dawn"</td>
            <td> March 12, 2025</td>
          </tr>
          <tr>
            <td>"Frostbite"</td>
            <td>June 4, 2025</td>
          </tr>
          <tr>
            <td>"Echoes of the Fallen"</td>
            <td> September 22, 2025</td>
          </tr><tr>
            <td>"Run with the Wolves"</td>
            <td> December 14, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default Home;
