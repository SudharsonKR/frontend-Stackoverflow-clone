import React from "react";
import "./RightSidebar.css";
import WidgetTags from "./WidgetTags";
import Widget from "./Widget";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTags />
    </aside>
  );
};

export default RightSidebar;
