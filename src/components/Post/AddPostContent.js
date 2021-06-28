import React from "react";
import {
  Editor,
  convertToRaw,
  convertFromRaw,
  EditorState,
  RichUtils,
} from "draft-js";

class AddPostContent extends React.Component {
  constructor(props) {
    super(props);
    // const compositeDecorator = new CompositeDecorator([
    //   {
    //     strategy: handleStrategy,
    //     component: HandleSpan,
    //   },
    //   {
    //     strategy: hashtagStrategy,
    //     component: HashtagSpan,
    //   },
    // ]);
    // compositeDecorator
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
  }

  componentDidMount = () => {
    let rawContent = JSON.parse(localStorage.getItem("content"));
    if (rawContent) {
      this.setState({
        editorState: EditorState.createWithContent(
          convertFromRaw(rawContent.content)
        ),
      });
    } else {
      // this.setState({ editorState: EditorState.createEmpty() });
    }
  };

  saveContent = (content) => {
    const { editorState } = this.state;

    let contentString = JSON.stringify({
      content: convertToRaw(content),
    });

    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      this.props.onCaptionChage(null);
    }

    this.props.onCaptionChage(contentString);
    localStorage.setItem("content", contentString);
  };

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({ editorState });
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const textOnly = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    this.props.onTextChange(textOnly);
  };

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const { editorState } = this.state;

    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div className={className + " p-2"} onClick={this.focus}>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="Tell a story..."
          ref="editor"
          spellCheck={true}
        />
      </div>
    );
  }
}

// const HANDLE_REGEX = /@[\w]+/g;
// const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

// function hashtagStrategy(contentBlock, callback, contentState) {
//   findWithRegex(HASHTAG_REGEX, contentBlock, callback);
// }

// function findWithRegex(regex, contentBlock, callback) {
//   const text = contentBlock.getText();
//   let matchArr, start;
//   while ((matchArr = regex.exec(text)) !== null) {
//     start = matchArr.index;
//     callback(start, start + matchArr[0].length);
//   }
// }

// const HandleSpan = (props) => {
//   return (
//     <span style={styles.handle} data-offset-key={props.offsetKey}>
//       {props.children}
//     </span>
//   );
// };

// const HashtagSpan = (props) => {
//   return (
//     <span style={styles.hashtag} data-offset-key={props.offsetKey}>
//       {props.children}
//     </span>
//   );
// };

// const styles = {
//   root: {
//     fontFamily: "'Helvetica', sans-serif",
//     padding: 20,
//     width: 600,
//   },
//   editor: {
//     border: "1px solid #ddd",
//     cursor: "text",
//     fontSize: 16,
//     minHeight: 40,
//     padding: 10,
//   },
//   button: {
//     marginTop: 10,
//     textAlign: "center",
//   },
//   handle: {
//     color: "rgba(98, 177, 254, 1.0)",
//     direction: "ltr",
//     unicodeBidi: "bidi-override",
//   },
//   hashtag: {
//     color: "rgba(95, 184, 138, 1.0)",
//   },
// };

export default AddPostContent;
