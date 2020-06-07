import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";

import {
  faArrowLeft,
  faTrashRestoreAlt,
  faUser,
  faPercent,
  faPaperPlane,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Settings = (props) => {
  const [show, setShow] = useState([false, false]);

  const handleClose = (index) => {
    let newShow = show;
    newShow[index] = false;

    setShow([...newShow]);
  };

  const handleShow = (index) => {
    let newShow = show;
    newShow[index] = true;

    setShow([...newShow]);
  };

  return (
    <div>
      <img
        src="./settings.png"
        style={{ width: "100%", position: "absolute" }}
      />
      <div className="container">
        <div className="">
          <div className="row" style={{ paddingTop: "120px" }}>
            <div className="col-md-12">
              <a href="/home">
                <h6 style={{ fontSize: "24px", color: "white" }}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Terug naar het menu
                </h6>
              </a>
              <br />
              <br />
              <h1 style={{ color: "white" }}>Mijn profiel</h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p
              onClick={() => {
                handleShow(0);
              }}
              style={{ color: "#457877", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />{" "}
              Profiel wijzigen
            </p>
          </div>
          {/* MODAL START */}
          <Modal
            show={show[0]}
            onHide={() => {
              handleClose(0);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal personal info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose(0);
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose(0);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* MODAL END */}
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p
              onClick={() => {
                handleShow(1);
              }}
              style={{ color: "#457877", cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={faPercent}
                style={{ marginRight: "10px" }}
              />{" "}
              Klantenkaart
            </p>
          </div>
          {/* MODAL START */}
          <Modal
            show={show[1]}
            onHide={() => {
              handleClose(1);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal points</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose(1);
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose(1);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* MODAL END */}
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p
              onClick={() => {
                handleShow(2);
              }}
              style={{ color: "#457877", cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "10px" }}
              />{" "}
              Berichten
            </p>
          </div>
          {/* MODAL START */}
          <Modal
            show={show[2]}
            onHide={() => {
              handleClose(2);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal orders</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose(2);
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose(2);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* MODAL END */}
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <a
              onClick={props.logout}
              style={{ color: "#457877", cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "10px" }}
              />
              Uitloggen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
