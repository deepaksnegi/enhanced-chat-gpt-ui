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
    </aside>
  );
};

export default Sidebar;
