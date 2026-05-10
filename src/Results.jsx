import React, { useState } from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>Hello from results</h2>
      </div>
    );
  } else {
    return null;
  }
}
