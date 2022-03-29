import logo from '../images/logo.svg';
import { Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header({ email, onSignOut }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClickBurger() {
    setIsClicked(!isClicked);
  }
  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });

  useEffect(() => {
    if (isMobile) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [isMobile]);

  return(
    <header className="header page__header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="логотип" className="header__logo" />
      </Link>
      <Switch>
        <Route path="/sign-in">
          <Link className="header__link" to="/sign-up">Регистрация</Link>
        </Route>
        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">Войти</Link>
        </Route>
        <Route exact path="/">
          {!isClicked && (
            <div className="header__info">
              <p className="header__email">{email}</p>
              <button className="header__button" onClick={onSignOut}>Выйти</button>
            </div>
          )}
          <button className={isClicked ? "header__burger-button" : "header__burger-close"} onClick={handleClickBurger}></button>
        </Route>
      </Switch>
    </header>
  );
}
