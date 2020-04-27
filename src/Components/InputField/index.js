import React from "react";

const InputField = props => {
  switch (props.type) {
    case "text":
      return (
        <input
          type="text"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      );
    case "url":
      return (
        <input
          type="url"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      );
    case "select":
      return (
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          {props.param.input.options.map(option => (
            <option value={option.value}>{option.title}</option>
          ))}
        </select>
      );
    default:
      return "Unknown input type!";
  }
};

export default InputField;
