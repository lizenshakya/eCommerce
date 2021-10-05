import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";

export default function Navigation() {
  const [openModal, setOpenModal] = useState({ openModal: false });
  const showModal = () => {
    setOpenModal({ openModal: true });
  };
  const closeModal = () => {
    setOpenModal({ openModal: false });
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Simple Login</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link onClick={showModal}>Login</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Modal show={openModal.openModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
