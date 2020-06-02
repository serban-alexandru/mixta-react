import React, { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import data from "../../constants";

const CheckEmail = (props) => {
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
      <div className="container">
        <div className="">
          <div className="row" style={{ paddingTop: "140px" }}>
            <div className="col-md-2 col-lg-3 col-sm-2 col-xs-0"></div>
            <div className="col-md-8 col-lg-6 col-sm-8 col-xs-12">
              <div
                className="card"
                style={{
                  backgroundColor: "#131313",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    paddingRight: "5vw",
                    paddingLeft: "5vw",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <h1
                    className="text-center"
                    style={{
                      color: "#F2A83B",
                      fontWeight: "bold",
                      fontSize: "36px",
                    }}
                  >
                    GESLAAGD!
                  </h1>
                  <h4
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Check je inbox
                  </h4>
                  <br />
                  <Link to="/login">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        marginTop: "0",
                        marginBottom: "15px",
                        backgroundColor: "#F2A83B",
                        borderColor: "#F2A83B",
                      }}
                    >
                      Aanmelden
                    </button>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3 col-sm-2 col-xs-0"></div>
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

export default CheckEmail;
