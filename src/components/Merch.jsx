import React from "react";

function Merch() {
  return (
    <div>
      <h1>Merch</h1>
      <p>Get your favorite Stage Fright gear here!</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center", border: "1px solid #ff0055", padding: "20px", width: "200px" }}>
          <h3>T-Shirt</h3>
          <p>$20.00</p>
          <button style={{ background: "#ff0055", color: "white", padding: "10px 20px", border: "none" }}>
            Buy Now
          </button>
        </div>
        <div style={{ textAlign: "center", border: "1px solid #ff0055", padding: "20px", width: "200px" }}>
          <h3>Poster</h3>
          <p>$10.00</p>
          <button style={{ background: "#ff0055", color: "white", padding: "10px 20px", border: "none" }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Merch;
