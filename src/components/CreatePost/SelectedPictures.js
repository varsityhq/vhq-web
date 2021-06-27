import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function SelectedPictures({ imgsrc, remove }) {
  return (
    <div className="v-post-add-image position-relative selected cp mr-3 my-2 d-flex justify-content-center align-items-center">
      <img src={imgsrc} alt="" />
      <div onClick={() => remove(imgsrc)} className="v-remove-pi">
        <IoCloseSharp className="text-white" />
      </div>
    </div>
  );
}
