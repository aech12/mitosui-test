"use client";
import { useState } from "react";

export default function MyComponent(props) {
  const [name, setName] = useState(() => "Foo");

  return (
    <div className="bg-red-500">
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or Svelte!
    </div>
  );
}
