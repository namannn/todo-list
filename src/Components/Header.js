import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap';

export default function Header(props) {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>{props.title}</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Nav>
                      { props.searchBar ? 
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                style={{
                                    marginRight : "5px"
                                }}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> : "" }
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
