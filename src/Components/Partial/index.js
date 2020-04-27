import React from "react";
import { Draggable } from "react-beautiful-dnd";
import convertStringToJSX from "../../Mixins/convertStringToJSX";

class Partial extends React.Component {
  render() {
    return (
      <Draggable
        key={this.props.partial.orderIndex}
        draggableId={`${this.props.index}`}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <div
            className="partial-wrapper"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={event => {
              this.props.handlePartialClick(
                event,
                this.props.partial.orderIndex
              );
            }}
          >
            {convertStringToJSX(this.props.partial.minifiedHTML)}
            <button
              className="btn-remove-partial"
              onClick={event => {
                this.props.onRemovePartial(
                  event,
                  this.props.partial.orderIndex
                );
              }}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Partial;
