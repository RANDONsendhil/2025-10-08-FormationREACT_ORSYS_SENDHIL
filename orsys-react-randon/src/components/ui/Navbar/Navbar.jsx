import React from "react";
import style from "./Navbar.module.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Container, Nav, Navbar as NavB } from "react-bootstrap";
import { Link } from "react-router";

const Navbar = (props) => {
    return (
        <div className={style.Navbar} data-testid="Navbar">
            <NavB bg="primary" data-bs-theme="dark">
                <Container>
                    <Link to="/" className="navbar-brand">
                        Navbar
                    </Link>
                    <Nav className="me-auto">
                        <Link className="nav-link" to={"/"}>
                            Home
                        </Link>
                        <Link className="nav-link" to="/Editor">
                            Nouveau...
                        </Link>
                        <Link className="nav-link" to="/Thumbnail">
                            Thumbnail
                        </Link>
                        <Link className="nav-link" to="/Editor/2">
                            Edit meme ID:2
                        </Link>
                    </Nav>
                </Container>
            </NavB>
        </div>
    );
};
export default Navbar;
