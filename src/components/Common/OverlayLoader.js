import React from "react";

export default function OverlayLoader() {
  return (
    <div className="v-overlayloader">
      <div className="v-ol-container">
        <div>
          <div class="dbl-spinner"></div>
          <div class="dbl-spinner dbl-spinner--2"></div>
        </div>
        <div className="w-100 text-center">Please wait..</div>
      </div>
    </div>
  );
}
