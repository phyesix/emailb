import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import {
  renderPartialParams,
  addPartialToScene,
  ejectPartialFromScene,
  reorderScene
} from "./actions";

import "./styles.css";
import "./styles/email-head.css";

import ListPartials from "./Containers/ListPartials";
import Partial from "./Components/Partial";
import Builder from "./Builder";
import Header from "./Components/Header";

const mapStateToProps = state => {
  return {
    isSidebarOpen: state.isSidebarOpen,
    editingPartialId: state.editingPartialId,
    partialsInScene: state.partialsInScene
  };
};

const mapDispatchToProps = dispatch => ({
  renderPartialParams: (sidebar, orderIndex) => {
    dispatch(renderPartialParams(sidebar, orderIndex));
  },
  addPartialToScene: (partial, orderIndex) => {
    dispatch(addPartialToScene(partial, orderIndex));
  },
  ejectPartialFromScene: restPartials => {
    dispatch(ejectPartialFromScene(restPartials));
  },
  reorderScene: newOrder => {
    dispatch(reorderScene(newOrder));
  }
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const setOrderIndexes = arr => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].orderIndex = i;

      if (arr[arr.length - 1].orderIndex === arr.length - 1) {
        resolve(arr);
      }
    }
  });
};

class App extends React.Component {
  constructor() {
    super();

    this.onDragEnd = this.onDragEnd.bind(this);
    this.onRemovePartial = this.onRemovePartial.bind(this);
    this.addPartialToScene = this.addPartialToScene.bind(this);
    this.handlePartialClick = this.handlePartialClick.bind(this);
  }

  addPartialToScene(partial) {
    this.props.addPartialToScene(partial, this.props.partialsInScene.length);
  }

  handlePartialClick(event, orderIndex) {
    event.preventDefault();
    this.props.renderPartialParams(true, orderIndex);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) return;

    const items = reorder(
      this.props.partialsInScene,
      result.source.index,
      result.destination.index
    );

    setOrderIndexes(items).then(newArr => {
      this.props.reorderScene(items);
    });
  }

  onRemovePartial(event, partialIndex) {
    event.stopPropagation();

    let restPartials = [...this.props.partialsInScene];

    restPartials.splice(partialIndex, 1);

    setOrderIndexes(restPartials).then(newArr => {
      this.props.ejectPartialFromScene(restPartials);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="builder">
          <ListPartials onClick={this.addPartialToScene} />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  id="holder"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {this.props.partialsInScene.map((partial, index) => (
                    <Partial
                      index={index}
                      partial={partial}
                      handlePartialClick={this.handlePartialClick}
                      onRemovePartial={this.onRemovePartial}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Builder />
        </div>

        {/* <button
          onClick={() => {
            navigator.clipboard.writeText(
              ReactDOM.findDOMNode(this.ref).innerHTML
            );
          }}
        >
          Export
        </button> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
