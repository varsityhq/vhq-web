const React = require("react");

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });

    this.props.imageUrl(event.target.files[0]);
  }

  handleBrowse = () => {
    // const body = document.body;

    let input = document.createElement("input");
    input.type = "file";
    input.onchange = this.handleChange;
    input.hidden = true;
    input.accept = ".png, .jpg, .jpeg";
    input.click();
    // body.appendChild(input);
  };

  render() {
    return (
      <>
        <div className="bold">Set profile picture</div>
        <div className="mt-3">
          <div className="d-flex justify-content-center">
            <img
              onClick={this.handleBrowse}
              style={{
                border: this.state.file ? "2px solid var(--primary)" : "none",
              }}
              className="v-setup-pp"
              src={this.state.file}
              alt=""
            />
          </div>
          <div className="d-flex mt-3 justify-content-center">
            <button onClick={this.handleBrowse} className="btn btn-v5">
              Browse Gallery
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Upload;
