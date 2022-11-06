import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token/tokenSlice";
import { setUser } from "../features/user/userSlice.js";
import { changeStateMenu } from "../features/navBar/navBarSlice";
import { getUser } from "../services/users.services";
import setCookie from "../utils/setCookie";
import menuBars from "../static/icons/bars-solid.svg";
import iconQuestion from "../static/icons/icon-sidebar-question.svg";
import arrowMenu from "../static/icons/icon-sidebar-back.svg";
import iconFile from "../static/icons/icon-sidebar-file.svg";
import iconApp from "../static/icons/icon-sidebar-appstore.svg";
import iconSingUp from "../static/icons/icon-sidebar-adduser.svg";
import iconSingIn from "../static/icons/icon-sidebar-login.svg";
import iconLogout from "../static/icons/icon-sidebar-logout.svg";
import "../static/styles/NavBar.scss";

const NavBar = () => {
  //estado del menú desplegable
  const stateMenu = useSelector((state) => state.stateMenu.value);

  //token
  const token = useSelector((state) => state.token.value);

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  //Obtener el usuario logueado del servidor y setearlo como estado global
  useEffect(() => {
    if (!token) {
      return;
    }
    getUser(token)
      .then((res) => dispatch(setUser(res.data)))
      .catch((e) => console.log("No haz iniciado sesion"));
  }, [token, dispatch]);

  return (
    <nav className={`nav-container ${stateMenu ? "open" : ""}`}>
      <div className="nav-header">
        <img
          src={arrowMenu}
          alt=""
          width={30}
          height={50}
          className={`arrowMenu ${stateMenu ? "rotate" : ""}`}
          onClick={() => dispatch(changeStateMenu())}
        />
        <Link to={"/"} className="logo">
          <h4>BEATLY</h4>
        </Link>
        <img
          src={menuBars}
          alt=""
          width={30}
          className="menuBars"
          onClick={() => dispatch(changeStateMenu())}
        />
      </div>
      {(stateMenu || window.screen.availWidth >= 1024) && (
        <>
          <div className="nav-body">
            <div>
              <img src={iconQuestion} alt="Question" width={30} />
              <span>Whats</span>
            </div>
            <div>
              <img src={iconFile} alt="File" width={30} />
              <span>Pricing</span>
            </div>
            <div>
              <img src={iconApp} alt="AppStore" width={30} />
              <span>App</span>
            </div>
          </div>
          <div className="nav-footer">
            {token ? (
              <>
                <Link 
                    to={"/me"} 
                    className="Url"
                >
                  <div>
                    <img
                      src={user.urlImage}
                      alt=""
                      width={30}
                      className="imageProfile"
                    />
                    <span>{user.username}</span>
                  </div>
                </Link>
                <Link
                  to={"/login"}
                  className="Url"
                  onClick={() => {
                    setCookie("__auth_user", "");
                    dispatch(setToken(""));
                  }}
                >
                  <div>
                    <img src={iconLogout} alt="" width={30} />
                    <span>Logout</span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/register"} className="Url">
                  <div>
                    <img src={iconSingUp} alt="Register" width={30} />
                    <span>Sign Up</span>
                  </div>
                </Link>
                <Link to={"/login"} className="Url">
                  <div>
                    <img src={iconSingIn} alt="Login" width={30} />
                    <span>Sign In</span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
