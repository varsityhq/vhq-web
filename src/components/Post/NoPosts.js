import { Link } from "react-router-dom";
import React from "react";

export default function NoPosts() {
  return (
    <div className="bg-darkish text-center py-4 rounded">
      <div className="bold h3">...</div>
      <div className="text-lb">You haven't created any posts</div>
      <div className="w-100 d-flex justify-content-center mt-3">
        <Link to="/add" className="btn btn-v5 border-0">
          Create a post
        </Link>
      </div>
    </div>
  );
}
