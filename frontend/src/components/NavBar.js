import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import Avatar from "./Avatar";

function NavBar() {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const loggedInLinks = (
        <>
            <Link to="/feed" className="nav-link">
                Feed
            </Link>
            <Link to="/" className="nav-link" onClick={handleSignOut}>
                Sign Out
            </Link>
            <Link to={`/profiles/${currentUser?.profile_id}`} className="nav-link">
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </Link>

        </>
    );

    const loggedOutLinks = (
        <>
            <Link to="/signin" className="nav-link">
                Signin
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
            <Link to={`/profiles/${currentUser?.profile_id}`} className="nav-link">
            </Link>
        </>

    );
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