"use client";
import * as React from "react";
import { useState } from "react";

function MyComponent(props) {
  const [name, setName] = useState(() => "Foo");

  return (
    <div>
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or Svelte!
    </div>
  );
}

export default MyComponent;
