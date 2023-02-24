import React from "react";
import KeyInput from "./KeyInput";
import "./sidebar.style.scss";
import SidebarOptions from "./SidebarOptions";
type Props = {};

const Sidebar = (props: Props) => {
  const hasApiKey = false;
  return <aside>{hasApiKey ? <SidebarOptions /> : <KeyInput />}</aside>;
};

export default Sidebar;
