import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;
const QuillClipboard = Quill.import("modules/clipboard");
const Delta = Quill.import("delta");

class Clipboard extends QuillClipboard {
  onPaste(event) {
    event.preventDefault();
    console.log(event.clipboardData.getData("text/html"));
    const range = this.quill.getSelection();
    const text = event.clipboardData.getData("text/plain");
    const delta = new Delta()
      .retain(range.index)
      .delete(range.length)
      .insert(text);

    const index = text.length + range.index;
    const length = 0;

    this.quill.updateContents(delta, "silent");
    this.quill.setSelection(index, length, "silent");
    this.quill.scrollIntoView();
  }
}

Quill.register("modules/clipboard", Clipboard, true);

class QuillEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorHTML: __ISMSIE__ ? "<p>&nbsp;</p>" : ""
    };

    this.reactQuillRef = null;
  }

  render() {
    return (
      <ReactQuill
        ref={el => {
          this.reactQuillRef = el;
        }}
        className="contentEditor"
        theme="snow"
        style={{ display: this.props.isSidebarOpen ? "block" : "none" }}
        value={this.props.value}
        onChange={this.props.handleContentUpdate}
        modules={this.modules}
      />
    );
  }

  modules = {
    toolbar: {
      handlers: {
        link: function(val) {
          if (val) {
            let url = prompt("URL ?");
            this.quill.format(
              "link",
              `{{shortURL '${url}'}}?utm_source={{utm_source}}&utm_medium=email&utm_content={{utm_content}}&utm_campaign={{utm_campaign}}&username={username}`
            );
          }
        }
      }
    }
  };
}

export default QuillEditor;
