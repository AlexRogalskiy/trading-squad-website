import React from "react";

type Props = {};

export default function Brand({}: Props) {
  return (
    <>
      <div className="flex items-center">
        <img
          src="logo.jpg"
          style={{ height: "60px" }}
          className="mr-2 rounded-md shadow-sm"
          alt=""
        />
        <h2 className="brand-text">
          Trading Squad
        </h2>
      </div>
    </>
  );
}
