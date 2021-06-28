import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { getDrawerContent } from "./DrawerContent";
import { makeStyles } from "@material-ui/core";

export default function NavDrawer(props) {
  const { drawerData, handleDrawer } = props;
  const useStyles = makeStyles((theme) => ({
    paper: {
      color: "#fff",
      borderRadius: "1.6rem 1.6rem 0 0",
      background: "linear-gradient(to bottom, #163f5d, var(--dark));",
      minHeight: "60%",
    },
  }));
  const classes = useStyles();
  const Styles = makeStyles((theme) => ({
    dragger: {
      borderRadius: 5,
      height: 8,
      margin: "14px auto 8px",
      width: 90,
      backgroundColor: "#fff",
    },
  }));
  const styles = Styles();
  const { state, anchor } = drawerData;
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          classes={classes}
          disableDiscovery
          anchor={"bottom"}
          open={Boolean(state[anchor])}
          onClose={(event) =>
            handleDrawer({
              open: false,
              anchor: "",
            })
          }
          onOpen={(event) =>
            handleDrawer({
              open: false,
              anchor: "",
            })
          }
        >
          <div className={styles.dragger} />
          {getDrawerContent(22)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

NavDrawer.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
  drawerData: PropTypes.shape(
    PropTypes.objectOf({
      open: PropTypes.bool,
      anchor: PropTypes.string,
    }).isRequired
  ),
};
