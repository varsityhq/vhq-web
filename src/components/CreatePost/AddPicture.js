import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

import { withStyles } from "@material-ui/core/styles";
import { getOrientation } from "get-orientation/browser";
import { getCroppedImg, getRotatedImage } from "../Settings/canvasUtils";
import { styles } from "../Settings/styles";

import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import { MdArrowBack } from "react-icons/md";
import { overlayLoader } from "../../store/actions/actions";
import { connect } from "react-redux";
import { changePPLink } from "../../store/actions/actions";
import { BiImageAdd } from "react-icons/bi";

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
  return <Fade direction="up" {...props} />;
}

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const ProfilePicChange = ({
  classes,
  profilepic,
  changePPLink,
  addAttachment,
}) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSelected = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      );

      addAttachment(croppedImage);
      setImageSrc(null);
    } catch (e) {
      console.error(e);
    }
  }, [addAttachment,imageSrc, croppedAreaPixels, rotation]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
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
              onClick={handleSelected}
              className="d-flex px-3 cp align-items-center"
            >
              Continue
            </div>
          </div>
          <div className={classes.cropContainer}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={3 / 4}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
        </div>
      </Dialog>

      <div className="d-flex py-0 justify-content-center">
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

      <div
        onClick={handlePPChange}
        className="v-post-add-image cp mr-3 my-2 d-flex justify-content-center align-items-center"
      >
        <BiImageAdd className="h2 mb-0" />
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
