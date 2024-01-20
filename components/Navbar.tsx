import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Navbar>
      <Container>
        <Link href="/login" passHref>
          <Navbar.Brand style={{ color: "white" }}>WIKITRIVIA</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {user ? (
              <div>
                <Nav.Link
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Navbar.Brand style={{ color: "white" }}>Signup</Navbar.Brand>
                </Link>
                <Link href="/login" passHref>
                  <Navbar.Brand style={{ color: "white" }}>
                    Login
                  </Navbar.Brand>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
