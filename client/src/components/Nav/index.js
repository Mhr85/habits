// import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import { elastic as Menu } from 'react-burger-menu'
import { Icon } from 'semantic-ui-react'
import "./style.css"
import Logo from "../../assets/images/Habits661.svg";


class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu>
        {/* <img src="../../assets/images/Habits661.svg"></img> */}
        <a id="home" className="menu-item" href="/"><Icon name='home' />Home</a>
        <a id="about" className="menu-item" href="/habits"><Icon name='list layout' />Habits</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//     <div className="container">
//       <Link className="navbar-brand" to="/">
//         Habits
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/habits">
//               Habits
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/books">
//               Books
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//   );
// }

export default Nav;
