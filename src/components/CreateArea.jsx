import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeContent(e) {
    setContent(e.target.value);
  }

  function afterSubmission(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={afterSubmission}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChangeTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChangeContent}
          value={content}
        />
        <button
          onClick={() => {
            props.onAdd([title, content]);
            setContent("");
            setTitle("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
