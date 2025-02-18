import "./App.css";
import CounterBG from "./components/counterComp/CounterBG";
import RichTextEditor from "./components/textEditorComp/RichTextEditor";
import UserFormData from "./components/userFormComp/UserFormData";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <CounterBG />
          <RichTextEditor />
        </div>
        <div>
          <UserFormData />
        </div>
      </div>
    </>
  );
}

export default App;
