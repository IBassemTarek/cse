import { React } from "react";

import "./HomeScreenStyles.css";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchTable from "../components/SearchTable";
import LogoImage from "../assets/imgs/cse_logo.png";

export default function HomeScreen() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <SearchBar child={<SearchTable />} />
    </div>
  );
}

function Logo() {
  return (
    <div className="Logo">
      <img className="LogoImage" src={LogoImage} alt="logo" />
      <p className="logo-title">
        <sup>CSE</sup> محرك بحث اللواء
      </p>
    </div>
  );
}
