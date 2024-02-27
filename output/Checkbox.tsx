"use client";
import * as React from "react";
import { useState } from "react";

function Checkbox(props: any) {
  const [checked, setChecked] = useState(() => false);

  function switchChecked() {
    checked != checked;
  }

  return (
    <div>
      <input
        type="checkbox"
        name="aposfja"
        aria-checked={checked}
        onClick={(event) => switchChecked()}
        checked={checked}
        aria-hidden={true}
      />
      <p>checked {checked}</p>
    </div>
  );
}

export default Checkbox;
