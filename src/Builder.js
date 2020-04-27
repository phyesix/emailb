/**
 * TODO:
 *
 * Partial'a ilk tikladigimizda Builder state'ine sahnedeki partial'in parametreleri yaziliyor.
 * Eger parametre inherit ise store'dan o deger aliniyor fakat state'e degil
 * sadece input value set ediliyor.
 *
 */

import React from "react";
import { connect } from "react-redux";
import { putPartialParams } from "./actions";
import InputPartial from "./Components/InputField";
import QuillEditor from "./Components/QuillEditor";

import "reset-css";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  putPartialParams: (orderIndex, newParams) =>
    dispatch(putPartialParams(orderIndex, newParams))
});

class Builder extends React.Component {
  constructor() {
    super();
    this.state = { key: null };
    this.handleParamChange = this.handleParamChange.bind(this);
    this.handleParamsSave = this.handleParamsSave.bind(this);
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
  }

  handleParamChange(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      params: {
        ...this.state.params,
        [event.target.id]: {
          ...this.state.params[event.target.id],
          val: event.target.value
        }
      }
    });
  }
  handleContentUpdate(newContent) {
    // console.log(newContent);
    this.setState({
      ...this.state,
      params: {
        ...this.state.params,
        content: {
          ...this.state.params.content,
          val: newContent
        }
      }
    });
  }
  handleParamsSave(event) {
    event.preventDefault();

    let partials = [...this.props.partialsInScene];
    let singlePartial = { ...partials[this.state.key] };
    let newMarkup = singlePartial.html;

    Object.keys(singlePartial.params).map(paramName => {
      return (newMarkup = newMarkup.replace(
        `{{${paramName}}}`,
        this.state.params[paramName].val
      ));
    });

    partials[this.state.key] = {
      ...this.props.partialsInScene[this.state.key],
      minifiedHTML: newMarkup,
      params: { ...this.state.params }
    };

    this.props.putPartialParams(this.state.key, partials);
  }

  render() {
    this.partial = this.props.isSidebarOpen
      ? this.props.partialsInScene[this.props.editingPartialOrder]
      : false;

    if (this.partial && this.partial.orderIndex !== this.state.key) {
      this.setState({
        ...this.partial,
        key: this.partial.orderIndex,
        editableContent: this.partial.editableContent ? true : false
      });
    }

    return (
      <React.Fragment>
        <aside className="builder">
          <div
            style={{
              display: this.props.isSidebarOpen ? "block" : "none",
              outline: "1px solid red",
              backgroundColor: "#FFF",
              // position: "fixed",
              // height: "100vh",
              width: "200px"
              // right: "0",
              // top: "0"
            }}
          >
            {this.state.params && (
              <form onSubmit={this.handleParamsSave}>
                {Object.keys(this.state.params).map((key, value) => (
                  <div>
                    <label htmlFor={key}>{this.state.params[key].title}</label>
                    <InputPartial
                      id={key}
                      name={key}
                      param={this.state.params[key]}
                      type={this.state.params[key].input.type}
                      onChange={this.handleParamChange}
                      value={
                        this.state.params[key].inherit &&
                        !this.state.params[key].val // Check if partial should inherit this parameter from its parent
                          ? this.props.templateParams[key] // inherited value
                          : this.state.params[key].val // local value
                      }
                    />
                  </div>
                ))}
                <button type="submit" className="btn__save">
                  SAVE
                </button>
              </form>
            )}
            {this.state.editableContent && (
              <QuillEditor
                className="contentEditor"
                isSidebarOpen={this.props.isSidebarOpen}
                value={this.state.params.content.val}
                handleContentUpdate={this.handleContentUpdate}
              />
            )}
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Builder);
