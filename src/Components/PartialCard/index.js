import React from "react";

class PartialCard extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick(this.props.partial.id)}>
        {this.props.partial.name}
      </button>
    );
  }
}

export default PartialCard;
