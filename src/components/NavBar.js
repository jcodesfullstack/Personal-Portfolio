import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () =>{
    return(
<div class="container"><a href="#home" class="navbar-brand">Navbar</a><div class="me-auto navbar-nav"><a href="#home" data-rr-ui-event-key="#home" class="nav-link">Home</a><a href="#features" data-rr-ui-event-key="#features" class="nav-link">Features</a><a href="#pricing" data-rr-ui-event-key="#pricing" class="nav-link">Pricing</a></div></div>
    )
}