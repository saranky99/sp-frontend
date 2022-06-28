import React from "react";
import { nav } from "materialize-css";
const Login = () => {
  return (
    <div className="login_conatiner">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="input-field col s12">
        <input id="LastName" type="text" class="validate" />
        <label for="LastName">Last Name</label>
      </div>
    </div>
  );
};

export default Login;
