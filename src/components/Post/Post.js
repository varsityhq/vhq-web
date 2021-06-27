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
  IoSend,
} from "react-icons/io5";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { handleMenuNav } from "../../store/actions/actions";
import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";

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
  Avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  IconButton: {
    fontSize: 16,
    padding: theme.spacing(1),
  },
  AccordionDetails: {
    padding: "0 4px 0",
  },
  AccordionSummary: {
    padding: 0,
  },
}));

const Post = ({ handleMenuNav }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="v-post pt-1 m-1 rounded ">
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
            <IoEllipsisHorizontalOutline className="h3" />
          </button>
        </div>
      </div>
      {/* <PostImgs /> */}
      <div className="py-2 px-2">i'm just testing by posting this</div>
      <div className={classes.root}>
        <Accordion expanded={expanded} className={classes.Accordion}>
          <AccordionSummary className={classes.AccordionSummary}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={10} container justify="flex-start" alignItems="center">
                <IconButton
                  onClick={() => alert("hello")}
                  className={classes.IconButton}
                >
                  <BsHeart className="mr-1" />
                  <Typography variant="body2">23</Typography>
                </IconButton>
                <IconButton className={classes.IconButton}>
                  <GoCommentDiscussion className="mr-1" />
                  <Typography variant="body2">23</Typography>
                </IconButton>
                <IconButton
                  onClick={() => setExpanded(!expanded)}
                  className={classes.IconButton}
                >
                  <IoChatboxEllipsesOutline className="mr-1" />
                </IconButton>
              </Grid>
              <Grid item container xs={2} justify="flex-end" alignItems="center">
                <IconButton className={classes.IconButton}>
                  <BsBookmarkPlus />
                </IconButton>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetails}>
            <Grid container alignItems="center">
              <Grid container item xs={1} justify="flex-end" alignItems="center">
                <Avatar
                  className={classes.Avatar}
                  alt="Joyleen"
                  src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
                />
              </Grid>
              <Grid item xs={11} justify="flex-start" alignItems="center">
                <Typography component="form">
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={11}>
                      <input
                        className="v-ycrac "
                        placeholder="Write your response"
                      />{" "}
                    </Grid>
                    <Grid container item xs={1} justify="center" alignItems="center">
                      <IconButton type="submit">
                        <IoSend />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
            <div className="v-post-footer pb-2 px-1 "></div>
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
