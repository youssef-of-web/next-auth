import React, { useState } from "react";
import Head from "next/head";
import classNames from "classnames";
function Auth() {
  const [Switch, setSwitch] = useState(true);
  const switch__form = () => {
    setSwitch(!Switch);
  };
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login page</title>
        <link rel="stylesheet" href="/css/style__auth.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>
      <div className={classNames("container", { "sign-in-mode": Switch })}>
        <div className="container__forms">
          <div className="form">
            <form action="" className="form__sign-up">
              <p
                className="form__title"
                style={{ fontSize: "40px", color: "#18044f" }}
              >
                Sign in to Your Account
              </p>
              <span>
                Sign in to your account so you can continue using your
                experience
              </span>
              <br />
              <div className="form__input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username or email" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div id="secondary__bloc">
                <div>
                  <input type="checkbox" id="remember" />{" "}
                  <span>remember me</span>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <input className="form__submit" type="submit" value="Sign in" />
              <p className="form__social-text">Or Sign in using</p>
              <div className="form__social-media">
                <a href="#" className="form__social-icons">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="form__social-icons">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="form__social-icons">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </form>

            <form action="" className="form__sign-in">
              <h2 className="form__title">Sign Up</h2>
              <div className="form__input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" required />
              </div>
              <div className="form__input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>

              <input className="form__submit" type="submit" value="Sign Up" />

              <p className="form__social-text">Or Sign up using</p>
              <div className="form__social-media">
                <a href="#" className="form__social-icons">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="form__social-icons">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="form__social-icons">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="container__panels">
          <div className="panel panel__left">
            <div className="panel__content">
              <h3 className="panel__title">You Have an Account ?</h3>
              <p className="panel__paragraph">You Can Connect in few moment</p>
              <button
                className="btn btn-transparent"
                id="sign-in-btn"
                onClick={switch__form}
              >
                Sign In
              </button>
            </div>
            <img
              className="panel__image"
              src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
              alt=""
            />
          </div>
          <div className="panel panel__right">
            <div className="panel__content">
              <h3 className="panel__title">Don't Have an Account Yet?</h3>
              <p className="panel__paragraph">
                Register in a few easy steps and experience our services quickly
              </p>
              <button
                className="btn btn-transparent"
                id="sign-up-btn"
                onClick={switch__form}
              >
                Sign Up
              </button>
            </div>
            <img
              class="panel__image"
              src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
