import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName, photoURL, email } = user;
  console.log(user);

  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };

  return (
    <div className="sticky-top">
      <Navbar className="bg-success" expand="lg">
        <Container>
          <Navbar.Brand
            sticky="top"
            as={NavLink}
            className="text-white "
            to="/home"
          >
            <h2>
              <i className="fas fa-eye"></i> World Tours
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} className="text-white" to="/home">
                <NavLink to="/home" activeStyle={activeStyle}>
                  Home
                </NavLink>
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} className="text-white" to="/register">
                    <NavLink to="/register" activeStyle={activeStyle}>
                      Register
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/login">
                    <NavLink to="/login" activeStyle={activeStyle}>
                      Login
                    </NavLink>
                  </Nav.Link>
                </>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={NavLink} className="text-white" to="/home">
                    <NavLink to="/spot" activeStyle={activeStyle}>
                      Service
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/home">
                    <NavLink to="/myOrders" activeStyle={activeStyle}>
                      MyOrders
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/home">
                    <NavLink to="/manageAllOrders" activeStyle={activeStyle}>
                      ManageAllOrders
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/about">
                    <NavLink to="/about" activeStyle={activeStyle}>
                      About
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link as={NavLink} className="text-white" to="/contact">
                    <NavLink to="/contact" activeStyle={activeStyle}>
                      Contact
                    </NavLink>
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{ width: "45px", borderRadius: "50%" }}
                        src={photoURL}
                        alt=""
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <div className="text-center">
                      <h6>{displayName}</h6>
                      <p className="">{email}</p>
                      <button onClick={logOut} className="btn btn-success">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
