import { Component } from "react";
import "../index.css";
import "./SearchBarStyles.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Container-Column">
          <div className="SearchBox">
            <SubmitButton />
            <SearchInput />
          </div>
          <SwitchOnOff />
          {this.props.child}
        </div>
      </div>
    );
  }
}

function SearchInput() {
  return (
    <input
      type="search"
      className="SearchBar"
      alt="search"
      placeholder="ابحث عن اسم الفرد"
    />
  );
}
function SubmitButton() {
  return (
    <button class="SubmitButton" type="submit">
      <p>بحث</p>
    </button>
  );
}
function SwitchOnOff() {
  return (
    <div class="filter-checkbox">
      <input
        value="private"
        name="switch"
        id="switch"
        type="checkbox"
        class="switch"
      />
      <label for="switch">
        <span class="switch-x-toggletext">
          <span class="switch-x-unchecked">
            <span class="switch-x-hiddenlabel">Unchecked: </span>مقفل
          </span>
          <span class="switch-x-checked">
            <span class="switch-x-hiddenlabel">Checked: </span>مفعل
          </span>
        </span>
        <span class="switch-x-text">الفلتر </span>
      </label>
    </div>
  );
}

export default SearchBar;
