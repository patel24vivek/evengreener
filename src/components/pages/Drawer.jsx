import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const TopDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="top"
      style={{ height: "300px" }}
    >
      <div style={{ padding: "20px" }}>
        <h2>Garden Composting</h2>
        <p>This drawer opens from top to bottom.</p>
        <button onClick={toggleDrawer}>Close</button>
      </div>
    </Drawer>
  );
};

export default TopDrawer;
