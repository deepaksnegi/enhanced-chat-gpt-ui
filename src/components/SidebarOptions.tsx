import React from "react";

type Props = {};

const SidebarOptions = (props: Props) => {
  return (
    <>
      <div className="sidebar-menu">
        <div className="new-chat button">
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
      </div>
      <div className="logout button">Logout</div>
    </>
  );
};

export default SidebarOptions;
