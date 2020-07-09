import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotes] = useState([]);

  function addItem(inputText) {
    setNotes(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setNotes(prevItems => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />

      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note[0]}
          content={note[1]}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
