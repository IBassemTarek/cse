import { React, useState } from "react";
import Logo from "../assets/imgs/cse_logo.png";

import "./login_screen.css";

export default function LoginScreen() {
  return (
    <div class="home-centered">
      <LogoWithTitle />
      <LoginInputs />
    </div>
  );
}
function LogoWithTitle() {
  return (
    <div>
      <img className="logo-image" src={Logo} alt="logo" />
      <p className="title-logo">محرك بحث اللواء</p>
      <p className="sub-title-logo">
        محرك بحث خاص بافراد اللواء الاول مرور ساحلي
      </p>
    </div>
  );
}

function LoginInputs() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs["username"] + "\n" + inputs["password"]);
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div class="group">
          <input
            className="loginInput"
            type="text"
            required
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label className="formInputLabel">اسم المستخدم</label>
        </div>

        <div class="group">
          <input
            className="loginInput"
            type="password"
            required
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label className="formInputLabel">كلمة المرور</label>
        </div>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  return (
    <button class="loginButton" type="submit">
      <p>تسجيل الدخول</p>
    </button>
  );
}
