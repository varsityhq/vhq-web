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
import { Editor, convertFromRaw, EditorState } from "draft-js";
import { Avatar, Box, Grid, IconButton, Typography } from "@material-ui/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const useStyles = (theme) => ({
  root: {
    width: "100%",
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
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 0,
  },
  IconButton: {
    fontSize: 20,
    padding: theme.spacing(1),
  },
  Accordion: {
    backgroundColor: "transparent",
    paddingLeft: theme.spacing(1),
  },
  AccordionDetails: {
    // padding: "0 4px 16px 20px",
    paddingLeft: theme.spacing(1),
    border: 0,
    boxShadow: "none",
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
    open: false,
    showDrawer: false,
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

  render() {
    const { x, core, handleDrawer, classes } = this.props;

    return (
      <div className="v-post pt-1 mx-1 mt-2 rounded ">
        <Box className="px-2">
          <Box display="flex" justify="center" alignItems="center">
            <Avatar className="" alt={core.accData.firstname} src={x.profilepic} />
            <Box className="d-flex px-2 align-content-center h-100 justify-content-between w-100">
              <Box>
                {/* //? Link to Profile Page */}
                <Link className="a-cancel" to="/c.brendon">
                  <span className="bold">
                    {x.firstname}&nbsp;{x.surname.charAt(0)}
                  </span>{" "}
                  <small className="px-2 text-lb">
                    {dayjs(x.created_at).fromNow()}
                  </small>
                </Link>
                <Link className="a-cancel d-block" to="/c.brendon">
                  <span className="d-flex align-items-center text-lb">
                    @{x.username} -
                    <GiThreeFriends className="text-lb ml-1" />{" "}
                  </span>
                </Link>
              </Box>
              <IconButton
                disableTouchRipple
                disableFocusRipple
                onClick={(event) =>
                  handleDrawer({
                    event: { key: event.key, type: event.type },
                    anchor: "main_botom_drawer",
                    open: true,
                  })
                }
                className="bg-transparent border-0 p-0"
              >
                <IoEllipsisHorizontalOutline className="h3 mt-1 mb-0" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <div className="py-2 px-2">
          <Editor
            editorState={this.state.postTextContent}
            readOnly
            ref="editor"
            spellCheck={false}
          />
        </div>

        <Accordion expanded={this.state.expanded} className={classes.Accordion}>
          <AccordionSummary className={classes.AccordionSummary}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={10} container justify="flex-start" alignItems="center">
                <IconButton
                  disableTouchRipple
                  disableFocusRipple
                  onClick={() => alert("hello")}
                  className={classes.IconButton}
                >
                  <BsHeart className="mr-1" />
                  <Typography variant="body2">{x.likes_count}</Typography>
                </IconButton>
                <IconButton
                  disableTouchRipple
                  disableFocusRipple
                  className={classes.IconButton}
                  onClick={(event) =>
                    handleDrawer({
                      event: { key: event.key, type: event.type },
                      anchor: "post",
                      open: true,
                    })
                  }
                >
                  <GoCommentDiscussion className="mr-1" />
                  <Typography variant="body2">{x.comments_count}</Typography>
                </IconButton>
                <IconButton
                  disableTouchRipple
                  disableFocusRipple
                  onClick={() => this.setExpanded(!this.state.expanded)}
                  className={classes.IconButton}
                >
                  <IoChatboxEllipsesOutline />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                xs={2}
                className="pr-2"
                justify="flex-end"
                alignItems="center"
              >
                <IconButton
                  disableTouchRipple
                  disableFocusRipple
                  className={classes.IconButton}
                >
                  <BsBookmarkPlus fontSize={24} />
                </IconButton>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetails}>
            <Box display="flex" width="100%" alignItems="center">
              <Box minWidth={30} display="flex" className="" alignItems="center">
                <Avatar
                  className={classes.Avatar}
                  alt={core.accData.firstname}
                  src={core.accData.profilepic}
                />
              </Box>
              <Box
                component="form"
                width="100%"
                display="flex"
                justify="flex-start"
                alignItems="center"
              >
                <Box width="100%">
                  <input className="v-ycrac " placeholder="Write your response" />
                </Box>
                <Box
                  minWidth={30}
                  display="flex"
                  justify="center"
                  alignItems="center"
                >
                  <IconButton type="submit">
                    <IoSend />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
export default withStyles(useStyles)(Post);
