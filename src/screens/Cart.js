import React, { useState } from "react";
import CartEmpty from "../components/CartEmpty";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import data from "../constants";
import AdressesComponent from "../components/AdressesComponent";

import {
  faTrashAlt,
  faTrashRestoreAlt,
} from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  var [adresses, setAdresses] = useState([]);
  const user = props.user;
  const [name, setName] = useState(user ? user.name : "");
  const [lastName, setLastName] = useState(user ? user.last_name : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  // const [street, setStreet] = useState(user ? user.street : "");
  // const [postcode, setPostcode] = useState(user ? user.postcode : "");
  // const [place, setPlace] = useState(user ? user.place : "");
  const [street, setStreet] = useState("street");
  const [postcode, setPostcode] = useState("postcode");
  const [place, setPlace] = useState("place");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const changePostcode = (e) => {
    setPostcode(e.target.value);
  };

  const changePlace = (e) => {
    setPlace(e.target.value);
  };

  if (props.cart.length == 0) {
    return <CartEmpty />;
  }

  var total = 0;
  for (let i = 0; i <= props.cart.length - 1; i++) {
    total += props.cart[i].price;
    // console.log(props.cart[i]);
    // console.log(total);
  }

  const checkData = () => {
    if (name && lastName && phone && street && postcode && place) {
      return true;
    } else {
      return false;
    }
  };

  function sendOrder() {
    if (!props.paymentType) {
      alert("Please select a payment method");
      return;
    }

    if (!checkData()) {
      alert("Please complete your adress details");
      return;
    }

    // adress took from logged in user !!! at least thats what I hope :)
    console.log("#######SEND ORDER INFO############");

    const paymentType = props.paymentType;
    const deliveryType = props.type;
    const time = props.time; // if 0 = asap / if 1 => pick time interval
    const deliveryTime = props.deliveryTime;

    console.log("name: " + name);
    console.log("lastName: " + lastName);
    console.log("phone: " + phone);
    console.log("street: " + street);
    console.log("postcode: " + postcode);
    console.log("place: " + place);
    console.log("paymentType: " + paymentType);
    console.log("deliveryType: " + deliveryType);
    console.log("time: " + time);
    console.log("deliveryTime: " + deliveryTime);

    // Sauces to be added!
    const products = props.card;
    console.log(props.cart);

    console.log("##################################");

    axios
      .post(data.baseUrl + "/api/create_order", {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Bestel nu toggle animation
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        className="btn"
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "20px 0px",
          backgroundColor: "#F2A83B",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const getAdresses = () => {
    if (adresses.length == 0) {
      axios
        .get(data.baseUrl + "/api/auth/my_adresses", {
          params: {
            token: props.token,
          },
        })
        .then((res) => {
          console.log(res.data.adresses);
          setAdresses(res.data.adresses);
          // setCategories(res.data.categories);
          // console.log(categories);
        });
    }
    setTimeout(function () {
      document.getElementById("bestel_nu").style.display = "none";
    }, 300);

    document.getElementById("levering").style.marginTop = "50px";
  };

  const removeItem = (index) => {
    let newProds = props.cart.filter((product, i) => {
      if (i == index) {
        return false;
      }
      return true;
    });
    props.setCart(newProds);
    localStorage.setItem("cart", JSON.stringify(newProds));
  };

  return (
    <div
      className="col-md-3 col-sm-0 col-xs-0  d-none d-sm-none  d-md-block"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1C1C",
        textAlign: "center",
        overflowY: "scroll",
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
      {props.cart.map((product, index) => {
        return (
          <div>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: "0",
                marginTop: "-2px",
                padding: "0",
              }}
            />
            <h2
              className="text-left"
              style={{
                fontSize: "18px",
                color: "white",
                padding: "20px 20px 10px 20px",
              }}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ marginRight: "20px", cursor: "pointer" }}
                onClick={() => removeItem(index)}
              />
              {product.name}
              <b className="float-right">€{product.price}</b>
            </h2>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: "0",
                padding: "0",
              }}
            />
          </div>
        );
      })}
      <div
        className="float-right text-white"
        style={{
          display: "inline-block",
          marginTop: "20px",
          paddingRight: "10px",
        }}
      >
        <tag style={{ fontSize: "24px" }}>Totaal:</tag>
        <tag
          style={{
            fontSize: "20px",
            padding: "5px 10px",
            border: "1px solid white",
            borderRadius: "5px",
            marginLeft: "20px",
          }}
        >
          €{(Math.round(total * 100) / 100).toFixed(2)}
        </tag>
      </div>
      <br />
      <Accordion defaultActiveKey="0">
        <div className="cart">
          <div className="card-header">
            <a onClick={() => getAdresses()} id="bestel_nu">
              <CustomToggle eventKey="1">Bestel nu</CustomToggle>
            </a>
          </div>
          <Accordion.Collapse eventKey="1">
            <AdressesComponent
              paymentType={props.paymentType}
              setPaymentType={props.setPaymentType}
              sendOrder={sendOrder}
              adresses={adresses}
              token={props.token}
              user={props.user}
              changeName={changeName}
              changeLastName={changeLastName}
              changePhone={changePhone}
              changeStreet={changeStreet}
              changePostcode={changePostcode}
              changePlace={changePlace}
              name={name}
              lastName={lastName}
              phone={phone}
              street={street}
              postcode={postcode}
              place={place}
            />
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
};

export default Cart;
