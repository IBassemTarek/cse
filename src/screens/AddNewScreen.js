import { React } from "react";

import "./AddNewScreenStyles.css";

import Navbar from "../components/Navbar";

export default function AddNewScreen() {
  return (
    <div className="App">
      <Navbar />
      <InputStyled />
    </div>
  );
}

function InputStyled() {
  return (
    <div class="nice-form-group">
      <label>Basic form group</label>
      <small>With additional information below the label</small>
      <input type="text" placeholder="Your name" />
    </div>
  );
}
