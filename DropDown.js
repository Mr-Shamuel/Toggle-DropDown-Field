import "./styles.css";
import { useState } from "react";

export default function App() {
  const cities = [
    { name: "Faridpur", id: 1 },
    { name: "Rajbari", id: 2 },
    { name: "Dhaka", id: 3 },
    { name: "Chittagong", id: 4 },
    { name: "Khulna", id: 5 },
    { name: "Sylhet", id: 6 },
    { name: "Barisal", id: 7 },
    { name: "Rangpur", id: 8 },
  ];

  const [fromCity, setFromCity] = useState(cities[0].id);
  const [toCity, setToCity] = useState(cities[1].id);

  const handleSwitch = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = cities.find((city) => city.id === fromCity);
    const to = cities.find((city) => city.id === toCity);
    const data = {
      city1: from.name,
      city2: to.name,
    };
    console.log(data); // Remove or modify this line as needed
  };

  // Filter out the selected "From" and "To" cities for the opposite fields
  const fromCityOptions = cities.filter((city) => city.id !== toCity);
  const toCityOptions = cities.filter((city) => city.id !== fromCity);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "300px" }}>
            <label>From</label>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            >
              {fromCityOptions.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ width: "300px", margin: "0 20px" }}>
            <button
              onClick={handleSwitch}
              style={{
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: "18px",
              }}
            >
              🔄
            </button>
          </div>

          <div style={{ width: "300px" }}>
            <label>To</label>
            <select
              value={toCity}
              onChange={(e) => setToCity(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            >
              {toCityOptions.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <input
          type="submit"
          value="Submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}
