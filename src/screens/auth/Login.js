import React, { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import data from "../../constants";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  if (props.isAuth && props.token) {
    history.replace("/order_details");
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(data.baseUrl + "/api/auth/login", {
          email,
          password,
        })
        .then((res) => {
          // access token
          console.log(res.data.access_token);
          props.setToken(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("auth", true);

          axios
            .post(data.baseUrl + "/api/auth/me", {
              token: localStorage.getItem("token"),
            })
            .then((res) => {
              console.log(res.data);
              localStorage.setItem("user", JSON.stringify(res.data));
              props.setUser(res.data);
            })
            .catch((err) => console.log(err));

          props.setAuth(true);
          history.replace("/postcode");
        })
        .catch((res) => {
          alert("Bad credentials");
        });
    } else {
      if (!email) {
        alert("Please enter an email");
      }
      if (!password) {
        alert("Please enter a password");
      }
    }
  };

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
                <ProgressBar
                  now={33}
                  style={{
                    borderBottomRightRadius: "0",
                    borderBottomLeftRadius: "0",
                    height: "5px",
                  }}
                  variant="warning"
                />
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
                    INLOGGEN
                  </h1>
                  <h4
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Welkom bij The Burgery
                  </h4>
                  <br />
                  <form onSubmit={loginSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="e-mail"
                        onChange={changeEmail}
                        style={styles.input}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="wachtwoord"
                        onChange={changePassword}
                        style={styles.input}
                      />
                    </div>
                    <Link
                      to="/forgot_password"
                      style={{ paddingTop: "-65px", color: "white" }}
                    >
                      Wachtwoord vergeten?
                    </Link>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        marginTop: "15px",
                        backgroundColor: "#F2A83B",
                        borderColor: "#F2A83B",
                      }}
                    >
                      Inloggen
                    </button>
                    <br />
                    <Link to="/home">
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                          width: "100%",
                          maxWidth: "200px",
                          marginTop: "15px",
                          backgroundColor: "#4C4C4C",
                          borderColor: "#4C4C4C",
                          marginBottom: "20px",
                        }}
                      >
                        Doorgaan als gast
                      </button>
                    </Link>
                  </form>
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

export default Login;
