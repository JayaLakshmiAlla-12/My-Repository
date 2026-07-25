import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>Flight Booking</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Hyderabad</td>
            <td>Mumbai</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;