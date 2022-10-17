import React from "react";

export default function Avatar(props) {
  let width = " 60px";
  let height = "60px";
  let br = "0%";

  switch (props.size) {
    case "xl":
      width = "200px";
      height = width;
      break;
    case "l":
      width = "120px";
      height = width;
      break;
    case "m":
      width = "60px";
      height = width;
      break;
    case "s":
      width = "30px";
      height = width;
      break;
    default:
      width = "60px";
      height = width;
      break;
  }

  switch (props.type) {
    case "circle":
      br = "50%";
      break;
    case "rounded":
      br = "10px";
      break;
    case "square":
      br = "0px";
      break;
    default:
      br = "0";
      break;
  }

  return (
    <div>
      <img
        alt="avatar"
        src={props.src}
        width={width}
        height={width}
        style={{ borderRadius: br, height: height, width: width }}
      />
    </div>
  );
}
