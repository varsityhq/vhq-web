import React from "react";
import Cropper from "react-easy-crop";

class App extends React.Component {
  state = {
    imageSrc:
      "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000",
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1 / 1,
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  render() {
    return (
      <div className="">
        <div className="v-crop-container">
          <Cropper
            image={this.state.imageSrc}
            crop={this.state.crop}
            zoom={this.state.zoom}
            aspect={this.state.aspect}
            onCropChange={this.onCropChange}
            onCropComplete={this.onCropComplete}
            onZoomChange={this.onZoomChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
