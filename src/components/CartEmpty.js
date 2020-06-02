import React from "react";

const CartEmpty = (props) => {
  return (
    <div
      className="col-md-3 col-sm-0 col-xs-0  d-none d-sm-none  d-md-block"
      style={{
        minHeight: "40vh",
        backgroundColor: "#1C1C1C",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          paddingTop: "20px",
          color: "white",
          // fontFamily: "SF Compact Display",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "29px",
        }}
      >
        MIJN BESTELLING
      </h1>
      <br />
      <br />
      <br />
      <h2
        style={{
          fontSize: "24px",
          color: "#F2A83B",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        NOG NIKS IN JE <br /> WINKELMANDJE
      </h2>
      <br />
      <br />
      <img src="./empty-burger.png" />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ fontSize: "18px", color: "white", textAlign: "center" }}>
        Log je hier links in of ga door als gast om <br /> te starten met
        bestellen
      </h2>
    </div>
  );
};

export default CartEmpty;
