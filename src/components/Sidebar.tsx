import React from "react";
import "./sidebar.style.scss";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <div className="new-chat">
        <span>+</span>
        New Chat
      </div>

      <div className="models">
        <p>Model</p>
        <select name="" id="">
          <option value="davinci">davinci</option>
          <option value="davinci1">davinci1</option>
          <option value="davinci2">davinci2</option>
        </select>
        <p>Model text</p>
      </div>

      <div className="temperature">
        <p>Temperature</p>
        <select name="" id="">
          <option value="davinci">0.5</option>
          <option value="davinci1">0.6</option>
          <option value="davinci2">0.7</option>
        </select>
        <p>Temp text</p>
      </div>
    </aside>
  );
};

export default Sidebar;
