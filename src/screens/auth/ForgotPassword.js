import React, { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import data from "../../constants";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  let history = useHistory();

  //   if (props.isAuth && props.token) {
  //     history.replace("/home");
  //   }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendEmailForgot = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
    }

    axios
      .post(data.baseUrl + "/api/reset_password", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        history.replace("/check_email");
      })
      .catch((err) => {
        alert("There is no account with this email!");
      });
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
                    WACHTWOORD RESETTEN
                  </h1>
                  <h4
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Vul je e-mail adres in
                  </h4>
                  <br />
                  <form onSubmit={sendEmailForgot}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="e-mail"
                        onChange={changeEmail}
                        style={styles.input}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        marginTop: "15px",
                        marginBottom: "15px",
                        backgroundColor: "#F2A83B",
                        borderColor: "#F2A83B",
                      }}
                    >
                      Versturen
                    </button>
                    <br />
                    <Link to="/login" style={{ color: "white" }}>
                      Terug naar aanmelden
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

export default ForgotPassword;
