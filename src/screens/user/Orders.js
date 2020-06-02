import React, { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import data from "../../constants";
import "../../App.css";

const Orders = (props) => {
  let history = useHistory();

  //   if (props.isAuth && props.token) {
  //     history.replace("/home");
  //   }

  return (
    <div>
      <img
        src="./burger-bg.png"
        style={{ width: "100%", position: "absolute" }}
      />
      <div className="container text-left">
        <div className="row" style={{ paddingTop: "140px" }}>
          <div className="col-md-12">
            <h1 style={{ color: "white" }}>MIJN BESTELLINGEN</h1>
            <br />
            <br />

            <div
              className="card"
              style={{
                border: "0.1px solid #838383",
                borderRadius: "1px",
                marginBottom: "40px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "24px",
                  padding: "30px 20px",
                }}
              >
                30/05/2020
                <tag className="float-right">
                  €33,99
                  <button
                    className="btn btn-warning"
                    style={{
                      backgroundColor: "#F2A83B",
                      color: "white",
                      marginLeft: "30px",
                      marginTop: "-5px",
                      padding: "5px 30px",
                    }}
                  >
                    Bekijken
                  </button>
                </tag>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: "0.1px solid #838383",
                borderRadius: "1px",
                marginBottom: "40px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "24px",
                  padding: "30px 20px",
                }}
              >
                30/05/2020
                <tag className="float-right">
                  €33,99
                  <button
                    className="btn btn-warning"
                    style={{
                      backgroundColor: "#F2A83B",
                      color: "white",
                      marginLeft: "30px",
                      marginTop: "-5px",
                      padding: "5px 30px",
                    }}
                  >
                    Bekijken
                  </button>
                </tag>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: "0.1px solid #838383",
                borderRadius: "1px",
                marginBottom: "40px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "24px",
                  padding: "30px 20px",
                }}
              >
                30/05/2020
                <tag className="float-right">
                  €33,99
                  <button
                    className="btn btn-warning"
                    style={{
                      backgroundColor: "#F2A83B",
                      color: "white",
                      marginLeft: "30px",
                      marginTop: "-5px",
                      padding: "5px 30px",
                    }}
                  >
                    Bekijken
                  </button>
                </tag>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: "0.1px solid #838383",
                borderRadius: "1px",
                marginBottom: "40px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "24px",
                  padding: "30px 20px",
                }}
              >
                30/05/2020
                <tag className="float-right">
                  €33,99
                  <button
                    className="btn btn-warning"
                    style={{
                      backgroundColor: "#F2A83B",
                      color: "white",
                      marginLeft: "30px",
                      marginTop: "-5px",
                      padding: "5px 30px",
                    }}
                  >
                    Bekijken
                  </button>
                </tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    backgroundColor: "#C4C4C4",
  },
};

export default Orders;
