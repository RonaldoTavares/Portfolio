import React from "react";
import headerClasses from "./HeaderClasses";
import imgPortfolio from "../../assets/img/portfolio.png";

const Header = () => {
  const classes = headerClasses();
  return (
    <header className={`${classes.resetStyle} ${classes.header}`}>
      <a className={`${classes.a}`}>
        <img src={imgPortfolio} className={classes.img} />
      </a>
      <nav>
        <ul className={`${classes.resetStyle} ${classes.menu}`}>
          <li className={`${classes.li}`}>
            <a className={`${classes.a} ${classes.itemHeader}`} href="/">
              Início
            </a>
          </li>
          <li className={`${classes.li}`}>
            <a className={`${classes.a} ${classes.itemHeader}`} href="/login">
              Login
            </a>
          </li>
          <li className={`${classes.li}`}>
            <a className={`${classes.a} ${classes.itemHeader}`} href="/">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
