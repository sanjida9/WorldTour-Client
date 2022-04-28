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
              <i className="fas fa-eye"></i> WorldTour
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink
                className="pt-1 mx-2"
                to="/home"
                activeStyle={activeStyle}
              >
                Home
              </NavLink>

              {!displayName ? (
                <>
                  <NavLink
                    className="px-2 pt-1"
                    to="/register"
                    activeStyle={activeStyle}
                  >
                    Register
                  </NavLink>

                  <NavLink
                    className="px-2 pt-1"
                    to="/login"
                    activeStyle={activeStyle}
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <div className="d-flex ">
                  <div className="pt-3">
                    <NavLink
                      className=" mx-2"
                      to="/spot"
                      activeStyle={activeStyle}
                    >
                      Tours
                    </NavLink>

                    <NavLink
                      className=" mx-2"
                      to="/myOrders"
                      activeStyle={activeStyle}
                    >
                      MyOrders
                    </NavLink>

                    <NavLink
                      className=" mx-2"
                      to="/manageAllOrders"
                      activeStyle={activeStyle}
                    >
                      ManageAllOrders
                    </NavLink>

                    <NavLink
                      className=" mx-2"
                      to="/newSpot"
                      activeStyle={activeStyle}
                    >
                      Add New Spot
                    </NavLink>

                    <NavLink
                      className=" mx-2"
                      to="/about"
                      activeStyle={activeStyle}
                    >
                      About
                    </NavLink>

                    {/* <NavLink
                      className=" mx-2"
                      to="/contact"
                      activeStyle={activeStyle}
                    >
                      Contact
                    </NavLink> */}
                  </div>
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
