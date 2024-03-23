import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


function App() {

  const projects = [
    // ... other projects,
    {
      id: 'barbershop-checkin', // A unique identifier for the project
      title: "Barber Shop Check-In",
      description: "A web app for managing barber shop appointments and check-ins.",
      //imageUrl: "path/to/barbershop/project/image.jpg", // Replace with the path or URL to an image of your project
      link: "https://barberproject-9741a92bff7e.herokuapp.com/" // Replace with your Heroku app's URL
    },
    // ... any additional projects
    {
      id: 'personal-dashboard',
      title: "Personal Dashboard",
      description: "A personal dashboard just for aesthetics.",
      imageUrl: "path/to/personal/dashboard/project/image.jpg", // Optional: Add if you have a project image
      link: "https://jcodesfullstack.github.io/personaldash"
    },
    {
      id:'to-do-list',
      title: "To-Do List",
      description: "A cool little tool to track your daily Tasks that you want ot get done.",
      link: "https://jcodesfullstack.github.io/To-Do-Board/"
    },
  ];
 
  // Function to generate stars
  const skills = ["React", "JavaScript", "C++", "Git", "HTML", "CSS", "Bootstrap", "Node.js", "Postman", "MongoDB", "Express", "EJS"];
  const createStars = (numberOfStars) => {
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      let starStyle = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 2 + 1}s`
      };
      stars.push(<div className="star" style={starStyle} key={i}></div>);
    }
    return stars;
    
  };

  return (
    <div className="App">
      <Navbar variant="dark" expand="lg" fixed="top" className="transparent-navbar">
        <Container>
          <Navbar.Brand href="#home" className="text-info">Jameel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="text-info">Home</Nav.Link>
              <Nav.Link href="#about" className="text-info">About</Nav.Link>
              <Nav.Link href="#skills" className="text-info">Skills</Nav.Link>
              <Nav.Link href="#projects" className="text-info">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home" className="home-section">
        {createStars(200)}
        <Container className="intro-text">
          <Row>
            <Col>
              <h1>Welcome, I'm <span className="text-info">Jameel</span>.</h1>
              <h2>A Full Stack Developer</h2>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about" className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="about-content">
                <h2 className="about-heading">About Me</h2>
                <p>
                I'm Jameel, and I've always had a deep interest in computers, from playing minecraft back in the day, hacking the game. Finding all different types of exploits and different things you can do with your computer. So getting into computer science was something that was almost destined to happen. Although it took some trial and error, I couldn't be more happy that this is that path that I chose.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="skills" className="skills-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} className="text-center">
              <h2 className="section-heading">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center">
                {skills.map((skill, index) => (
                  <Badge key={index} pill className="skill-badge m-2">{skill}</Badge>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    {/* Projects Section */}
<div id="projects" className="projects-section">
  <Container>
    <Row className="justify-content-center">
      <Col lg={12} className="text-center">
        <h2 className="section-heading">Projects</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {projects.map((project) => (
            // Wrap the card content in an <a> tag to make it clickable
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div key={project.id} className="project-card m-2">

                <h3>{project.title}</h3>
                
                {/* Remove the <a> tag around the button to make the entire card clickable */}
                {/* If you need a button-like element, consider styling a <div> or <span> instead */}
              </div>
            </a>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
</div>
    </div>
  );
}

export default App;