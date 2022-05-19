import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  headerDiv: {
    width: "99%",
    display: "flex",
    height: " 64px",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#fff",
  },
  virtualCard: {
    color: "#000",
    borderRadius: "3px",
    height: "22px",
    padding: "0.4rem 0.3rem 0.3rem",
    boxShadow: "2px 3px 3px #dfdfdf",
    margin: "1rem 0",
  },
  badge: {
    display: "flex",
    padding: "0 1rem 0 1rem",
    alignItems: "center",
  },
  badgeTitle: {
    fontSize: "16px",
    padding: "0 0 0 0.2rem",
  },
  camera: {
    width: "24px",
  },
  iconCameraDiv: {
    backgroundColor: "#dfdfdf57",
    display: "flex",
    margin: "0 0.2rem",
    color: "#0096FF",
    borderRadius: "4px",
    boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerDiv}>
      <div className={classes.badge}>
        <h2>Virtual Cards</h2>
        <div className={classes.iconCameraDiv}>
          <i className={`material-icons ${classes.camera}`}>
            videocam_outlined
          </i>
          <span className={classes.badgeTitle}>Learn more</span>
        </div>
      </div>
      <div className={classes.virtualCard}>+ virtual Card</div>
    </div>
  );
};

export default Header;
