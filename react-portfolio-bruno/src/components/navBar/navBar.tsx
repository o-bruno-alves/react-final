import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

type navBarType = {
  logo: string;
  navList: string[];
  buttonText?: string;
};

const NavBar = (props: navBarType) => {
  const { logo, navList, buttonText } = props;

    const [selected, setSelected] = useState(null);
    const handleClick = (index:any) => {
      setSelected(index);}

  return (
    <div className={buttonText ? style.mainHeader : style.mainFooter}>
      <div className={style.logo}>
        <p>{logo}</p>
      </div>
      <nav className={style.mainMenu}>
        <ul>
          <li>
            <Link to="/">
              <p
                style={{
                  color: selected===1 ? "rgba(255, 255, 255)":"#acacac" ,
                }}
                onClick={() => handleClick(1)}
              >
                {navList[0]}
              </p>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <p
                style={{
                  color: selected===2 ? "rgba(255, 255, 255)":"#acacac",
                }}
                onClick={() => handleClick(2)}
              >
                {navList[1]}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/WorkInProgress">
              <p
                style={{
                  color: selected===3 ? "rgba(255, 255, 255)":"#acacac",
                }}
                onClick={() => handleClick(3)}
              >
              {navList[2]} </p>
            </Link>
          </li>
          <li>
            <Link
              to="Contact">
              <p
                style={{
                  color: selected===4 ? "rgba(255, 255, 255)":"#acacac",
                }}
                onClick={() => handleClick(4)}
              
            >
              {navList[3]} </p>
            </Link>
          </li>
        </ul>
      </nav>
      {props.buttonText ? (
        <div className={style.contactButton}>
          <Link
              to="Contact"><button onClick={() => handleClick(4)}>{buttonText}</button></Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
