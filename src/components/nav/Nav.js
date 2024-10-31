import React from "react";
import "./Nav.css"; 

const list = document.querySelectorAll(`.list`);
  
function active(event) { 
  list.forEach((item) => item.classList.remove("active"));
  event.preventDefault();
  
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", active));

function Nav() {
  return (
    <nav>
      <ul style={{ "--clr": "fff" }}>
        <li className="l1 list active">
          <a href="#">
            <span className="icon">
              <i className="fa-solid fa-house"></i>
            </span>
            <span className="text">Home</span>
            <span className="circle"></span>
          </a>
        </li>
        <li className="l2 list">
          <a href="#">
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="text">About</span>
            <span className="circle"></span>
          </a>
        </li>

        <li className="l3 list">
          <a href="#">
            <span className="icon">
              <i className="fa-brands fa-wpforms"></i>
            </span>
            <span className="text">serves</span>
            <span className="circle"></span>
          </a>
        </li>

        <li className="l4 list">
          <a href="#">
            <span className="icon">
              <i className="fa-solid fa-briefcase"></i>
            </span>
            <span className="text">Portfolio</span>
            <span className="circle"></span>
          </a>
        </li>

        <li className="l2 list">
          <a href="#">
            <span className="icon">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className="text">Contact</span>
            <span className="circle"></span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </nav>
  
);
}



export default Nav;
