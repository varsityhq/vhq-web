import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
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
import { Editor, convertFromRaw, EditorState } from "draft-js";
import { Avatar, Box, Grid, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const useStyles = (theme) => ({
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
});

class Post extends Component {
  state = {
    expanded: false,
    showSend: false,
    postTextContent: EditorState.createEmpty(),
  };

  componentDidMount = () => {
    let rawContent = JSON.parse(this.props.x.caption);
    this.setState({
      postTextContent: EditorState.createWithContent(
        convertFromRaw(rawContent.content)
      ),
    });
  };

  setExpanded = (n) => {
    this.setState({ expanded: n });
  };

  handleFocus = () => this.setState({ showSend: true });
  // componentDidUpdate() {
  //   console.log(this.props.menuNav);
  // }
  render() {
    const { classes } = this.props;
    const { handleMenuNav } = this.props;

    return (
      <div className="v-post pt-1 mt-2 rounded ">
        <div className="d-flex p-2 align-items-center  position-relative">
          <img className="profilep" alt="" src={this.props.x.profilepic} />
          <div className="d-flex px-2 align-content-center h-100 justify-content-between w-100">
            <Link
              className="a-cancel"
              to="/c.brendon"
              // className="pl-3 v-post-header mt- d-flex align-items-center"
            >
              <div className=" mb-0">
                <span className="bold">
                  {this.props.x.firstname}&nbsp;{this.props.x.surname.charAt(0)}
                </span>{" "}
                <span className="d-flex align-items-center text-lb">
                  @{this.props.x.username} -
                  <GiThreeFriends className="text-lb ml-1" />{" "}
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
        <div className="py-2 px-2">
          <Editor
            editorState={this.state.postTextContent}
            readOnly
            ref="editor"
            spellCheck={false}
          />
        </div>
        <div style={{ fontSize: "13px" }} className="px-2 text-lb">
          {dayjs(this.props.x.created_at).fromNow()}
        </div>
        <div className={classes.root}>
          <Accordion expanded={this.state.expanded} className={classes.Accordion}>
            <AccordionSummary className={classes.AccordionSummary}>
              <Grid container justify="center" alignItems="center">
                <Grid
                  item
                  xs={10}
                  container
                  justify="flex-start"
                  alignItems="center"
                >
                  <IconButton
                    onClick={() => alert("hello")}
                    className={classes.IconButton}
                  >
                    <BsHeart className="mr-1" />
                    <Typography variant="body2">
                      {this.props.x.likes_count}
                    </Typography>
                  </IconButton>
                  <IconButton className={classes.IconButton}>
                    <GoCommentDiscussion className="mr-1" />
                    <Typography variant="body2">
                      {this.props.x.comments_count}
                    </Typography>
                  </IconButton>
                  <IconButton
                    onClick={() => this.setExpanded(!this.state.expanded)}
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
              <Box display="flex" alignItems="center">
                <Box minWidth={35} justify="flex-end" alignItems="center">
                  <Avatar
                    className={classes.Avatar}
                    alt={this.props.core.accData.firstname}
                    src={this.props.core.accData.profilepic}
                  />
                </Box>
                <Box width="100%" justify="flex-start" alignItems="center">
                  <Typography component="form">
                    <Box display="dlex" justify="flex-start" alignItems="center">
                      <Box width="100%">
                        <input
                          className="v-ycrac "
                          placeholder="Write your response"
                        />{" "}
                      </Box>
                      <Box minWidth={35}>
                        <IconButton type="submit">
                          <IoSend />
                        </IconButton>
                      </Box>
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <div className="v-post-footer pb-2 px-1 "></div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ menuNav, core }) => ({ menuNav, core });
const mapDispatchToProps = {
  handleMenuNav,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Post));
