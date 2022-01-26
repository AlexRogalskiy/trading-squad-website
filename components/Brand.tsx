import React from "react";

type Props = {};
const domain = location.href;

export default function Brand({}: Props) {
  return (
    <>
      <a href={domain}>
        <div className="flex items-center">
          <img
            src="logo.jpg"
            style={{ height: "60px" }}
            className="mr-2 rounded-md shadow-sm"
            alt=""
          />
          <h2 className="brand-text">Trading Squad</h2>
        </div>
      </a>
    </>
  );
}
