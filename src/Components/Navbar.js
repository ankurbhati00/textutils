
import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props){
return(
<>

<nav className={`navbar navbar-expand-lg mx-0  bg-${props.preBg}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color: props.preBg==='light'?'black':'white'}} to="/">TextUtls</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" style={{color: props.preBg==='light'?'black':'white'}} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: props.preBg==='light'?'black':'white'}} to="/about">About Us </Link>
        </li>
        
      </ul>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode}  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color: props.preBg==='light'?'black':'white'}} htmlFor="flexSwitchCheckDefault">{props.preBg==='light'?'Dark Mode':'Light Mode'}</label>
</div>

  </div>
</nav>



</>
);
}