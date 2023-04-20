// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import app from './container/firebaseConfig'
// export default class Navigation extends Component {
//   render() {
//     return (
//       <div>
//         <Link to='/'>Home</Link>

//         <Link to='/todo'>Todo</Link>
//         <Link to='/logout'>Logout</Link>
//       </div>
//     )
//   }
// }

import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark">
      <Navbar.Toggle aria-controls="" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink className="abcd" eventKey="1" as={Link} to="/">
  
          </NavLink>
          <NavLink className="mt-3" eventKey="1" as={Link} to="/home">home</NavLink>
          <NavLink className="mt-3" eventKey="2" as={Link} to="/login">login</NavLink>
          <NavLink className="mt-3" eventKey="3" as={Link} to="/logout">logout</NavLink>
          <NavLink className="mt-3" eventKey="4" as={Link} to="/todo">todo</NavLink>
        </Nav>
      </Navbar.Collapse>


    </Navbar>
  )
}
export default Navigationbar