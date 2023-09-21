import logo from ".././logo.svg";
import ".././App.css";
import { Component } from "react";
import { Home } from "./home";
import { About } from "./About";
import { Contacts } from "./Contacts";
import Gallary from "./Gallary/Gallary";
import Parent from "./Parent/Parent";

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Parent />
      </>
    );
  }
}
