import React from "react";
import { render } from "react-dom";
import "./main.css";

const Index = () => <div className="header">Hello</div>;

export default Index;

const div = document.createElement("div");
document.body.appendChild(div);

render(<Index />, div);
