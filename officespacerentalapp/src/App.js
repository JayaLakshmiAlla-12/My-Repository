import './App.css';

function App() {

  const office = {
    Name: "DBS Business Center",
    Rent: 55000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
    },
    {
      Name: "Regus Office",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500"
    },
    {
      Name: "Smart Work",
      Rent: 45000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src={officeList[0].Image}
        alt="Office"
        width="400"
        height="250"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (
          <div key={index}>

            <img
              src={item.Image}
              alt={item.Name}
              width="300"
              height="180"
            />

            <p><b>Name:</b> {item.Name}</p>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> {item.Rent}
            </p>

            <p><b>Address:</b> {item.Address}</p>

            <hr />

          </div>
        ))
      }

    </div>
  );
}

export default App;