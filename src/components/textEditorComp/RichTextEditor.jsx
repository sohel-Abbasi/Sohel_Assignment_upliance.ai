import { useEffect } from "react";
import { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { debounce } from "lodash";
const RichTextEditor = () => {
  const [textEditor, setTextEditor] = useState(() => {
    // yaha ham localstorage se data fetch karenge
    const savedTextData = localStorage.getItem("textEditorData");
    return savedTextData ? savedTextData : "";
  });

  // useEffect hook ka use karke ham localstorage me data save karenge jab bhi vo change hoga
  // here i use usecallback hook to prevent the function to be created on each render
  const saveToLocalStorage = useCallback(
    debounce((content) => {
      localStorage.setItem("textEditorData", content);
      console.log(content);
    }, 2000),
    []
  ); // Adjust the delay as needed

  useEffect(() => {
    // yaha ham localstorage me data save karenge jab bhi vo change hoga
    saveToLocalStorage(textEditor);
  }, [textEditor]);

  return (
    <div
      style={{
        width: "87%",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        height: "250px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>RichTextEditor</h1>

      {/* here we use React Quill that give us to prebuilded text editor component  */}
      <ReactQuill
        theme="snow"
        value={textEditor}
        onChange={setTextEditor}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        placeholder="write text here..."
      />
    </div>
  );
};

export default RichTextEditor;
