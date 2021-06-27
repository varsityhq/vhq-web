import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { GiThreeFriends } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import {
  IoChatboxEllipsesOutline,
  IoEllipsisHorizontalOutline,
} from "react-icons/io5";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { handleMenuNav } from "../../store/actions/actions";
import { Grid, IconButton, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  Accordion: {
    backgroundColor: "transparent",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  IconButton: {
    fontSize: 16,
  },
}));

const Post = ({ handleMenuNav }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="v-post pt-1 mt-2 rounded ">
      <div className="d-flex p-2 align-items-center  position-relative">
        <img
          className="profilep"
          alt=""
          src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
        />
        <div className="d-flex px-2 align-content-center h-100 justify-content-between w-100">
          <Link
            className="a-cancel"
            to="/c.brendon"
            // className="pl-3 v-post-header mt- d-flex align-items-center"
          >
            <div className=" mb-0">
              <span className="bold">Thendo Phalwa</span>{" "}
              <span className="d-flex align-items-center text-lb">
                @t.phalwa -<GiThreeFriends className="text-lb ml-1" />{" "}
              </span>
            </div>
          </Link>
          <button
            onClick={() =>
              handleMenuNav({
                show: true,
                name: "brendon-post",
              })
            }
            className="bg-transparent border-0 p-0"
          >
            <IoEllipsisHorizontalOutline className="h3 mt-1 mb-0" />
          </button>
        </div>
      </div>
      {/* <PostImgs /> */}
      <div className="py-2 px-2">i'm just testing by posting this</div>
      <div className={classes.root}>
        <Accordion expanded={expanded} className={classes.Accordion}>
          <AccordionSummary>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={10} container justify="flex-start" alignItems="center">
                <IconButton
                  onClick={() => alert("hello")}
                  className={classes.IconButton}
                >
                  <BsHeart className="mb-0 mr-2" />
                  <Typography variant="body2">23</Typography>
                </IconButton>
                <IconButton className="mx-3">
                  <GoCommentDiscussion className={classes.IconButton} />
                  <Typography variant="body2">23</Typography>
                </IconButton>
                <IconButton className="">
                  <IoChatboxEllipsesOutline className="mb-0 mr-2" />
                </IconButton>
              </Grid>
              <Grid item container xs={2} justify="flex-end" alignItems="center">
                <BsBookmarkPlus className={classes.IconButton} />
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <div className="v-post-footer pb-2 px-1 ">
              <form className="d-flex align-items-center py-1 px-2">
                <img
                  className="profilep2 mr-2"
                  alt=""
                  src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
                />
                <input className="v-ycrac " placeholder="Write your response" />{" "}
              </form>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
const mapStateToProps = ({ menuNav }) => ({ menuNav });
const mapDispatchToProps = {
  handleMenuNav,
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
