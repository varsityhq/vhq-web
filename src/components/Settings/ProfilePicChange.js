import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { getOrientation } from "get-orientation/browser";
import ImgDialog from "./imgDialog";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import { styles } from "./styles";
import imgPH from "../../assets/img/avatar.png";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { MdArrowBack } from "react-icons/md";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import store from "../../store/store";
import { base64StringToBlob } from "blob-util";

import { overlayLoader } from "../../store/actions/actions";
import { connect } from "react-redux";
import { changePPLink } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    profilepic: state.core.accData.profilepic,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changePPLink: (n) => dispatch(changePPLink(n)),
    overlayLoader: (s) => dispatch(overlayLoader(s)),
  };
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const ProfilePicChange = ({ classes, profilepic, changePPLink }) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const uploadImage = useCallback(async () => {
    store.dispatch(overlayLoader(true));
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      );

      // let formData = new FormData();
      let file = croppedImage.toString();
      let url = file;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "arraybuffer";
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
          return;
        }

        var returnedBlob = new Blob([xhr.response], { type: "image/jpeg" });
        // console.log(returnedBlob);
        let formData = new FormData();

        formData.append("file", returnedBlob, "jpeg");

        store.dispatch(overlayLoader(true));
        axios
          .post("/account/updatepimage", formData)
          .then(() => {
            changePPLink(croppedImage);
            store.dispatch(overlayLoader(false));

            setImageSrc(null);
            console.log("done");
          })
          .catch((err) => {
            store.dispatch(overlayLoader(false));
            console.log(err);
            setImageSrc(null);
          });

        var reader = new FileReader();
        reader.onload = function (e) {
          var returnedURL = e.target.result;
          var returnedBase64 = returnedURL.replace(/^[^,]+,/, "");
          // console.log(`data:image/jpeg;base64,${returnedBase64}`);
          // console.log("already", returnedBlob);
          // const contentType = "image/jpeg";
          // const b64Data = returnedBase64;
          // const blob = base64StringToBlob(b64Data, contentType);
          // console.log(blob);
        };
        reader.readAsDataURL(returnedBlob); //Convert the blob from clipboard to base64
      };
      xhr.send();
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
      return croppedImage;
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // apply rotation if needed for tilted images
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }

      setImageSrc(imageDataUrl);
    }
  };

  const handlePPChange = () => {
    document.getElementById("v-file-selector").click();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={imageSrc ? true : false}
        onClose={() => setImageSrc(null)}
        TransitionComponent={Transition}
      >
        <div className={classes.dialogContainer}>
          <div className="v-header-section justify-content-between  d-flex py-3 p-2 bold mb-0 h6">
            <div
              onClick={() => setImageSrc(null)}
              className="d-flex align-items-center"
            >
              <MdArrowBack className="h3 mb-0" />
              <span className="ml-3">Edit Image</span>
            </div>
            <div
              onClick={uploadImage}
              className="d-flex px-3 align-items-center"
            >
              Done
            </div>
          </div>
          <div className={classes.cropContainer}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ root: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>

            <div className="w-100 py-3 d-flex justify-content-center">
              <div className="bold" onClick={uploadImage}>
                Set profile picture
              </div>
            </div>
          </div>
          {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
        </div>
      </Dialog>

      <div className="d-flex py-3 justify-content-center">
        <div className="v-profile-picture">
          <img
            className="img-fluid"
            src={profilepic ? profilepic : imgPH}
            alt=""
          />

          <div onClick={handlePPChange} className="v-profilep-over"></div>
        </div>
        {!imageSrc && (
          <input
            hidden
            id="v-file-selector"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        )}
      </div>
      <div onClick={handlePPChange} className="text-center bold">
        Change Image
      </div>
    </div>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ProfilePicChange));
