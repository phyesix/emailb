import React from "react";

import Partials from "../../Partials";

const ListPartials = props => (
  <ul
    style={{
      position: "relative",
      width: "120px",
      padding: "16px",
      display: "grid"
    }}
  >
    {Partials.map(partial => {
      if (!partial.visible) {
        return "";
      } else {
        return (
          <li>
            <button
              onClick={event => {
                props.onClick({ ...partial });
              }}
              style={{
                height: "64px",
                width: "100%",
                margin: "8px 0",
                background: "orange",
                border: "1px solid orange",
                borderRadius: "3px",
                color: "#FFFFFF",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              {partial.name}
            </button>
          </li>
        );
      }
    })}
  </ul>
);

export default ListPartials;
