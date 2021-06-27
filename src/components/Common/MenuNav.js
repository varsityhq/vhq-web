import React from "react";

export default function MenuNav({ menuNav, handleMenuNav }) {
  return (
    <>
      <div
        className={menuNav.show ? "vhq-menu-backdrop" : ""}
        onClick={() => handleMenuNav({ show: false })}
      ></div>
      <div
        className={`${
          menuNav.show ? "vhq-menu-nav_a" : ""
        } position-fixed vhq-menu-nav`}
      >
        <div className="bar bg-white" />
        <ul className="px-2 bold text-center">
          <li className="py-2">Hide from me</li>
          <li className="py-2">Go to profile</li>
          <li className="py-2">Copy link</li>
          <li className="py-2 text-danger ">Report</li>
          <li
            onClick={() => handleMenuNav({ show: false })}
            className="py-2 text-danger"
          >
            Close
          </li>
        </ul>
      </div>
    </>
  );
}
