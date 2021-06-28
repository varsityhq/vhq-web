import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { getDrawerContent } from "./DrawerContent";

export default function NavDrawer(props) {
  const { drawerData, handleDrawer } = props;

  const { state, anchor } = drawerData;
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
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
