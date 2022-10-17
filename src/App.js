import React from "react";
import "./style.css";
import Avatar from "./Avatar.js";

export default function App() {
  return (
    <div>
      <h1>Customizable avatar component</h1>
      <Avatar src="https://picsum.photos/400/400" size="s" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="rounded" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="rouded" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="s" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="rounded" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="s" type="circle" />
    </div>
  );
}
