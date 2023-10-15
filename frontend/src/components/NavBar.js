import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCurrentUser } from "../contexts/CurrentUserContext";

function NavBar() {
    const currentUser = useCurrentUser();

    const loggedInLinks = <>{currentUser?.username}</>;

    const loggedOutLinks = (
        <>
            <Link to="/signin" className="nav-link">
                Signin
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
        </>
        
    )
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className="nav-link">
                    <Navbar.Brand className="fw-bold" href="#home">
                        GGN
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/discover" className="nav-link">
                            Discover
                        </Link>
                        {currentUser ? loggedInLinks : loggedOutLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;