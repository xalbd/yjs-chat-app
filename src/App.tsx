import React, { useEffect } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "./store";
import Messages from "./components/Messages";
import Header from "./components/Header";
import InputBox from "./components/InputBox";

function App() {
  const clientID = awareness.clientID;

  const state = useSyncedStore(store);
  const [name, setName] = React.useState("Placeholder");

  useEffect(() => {
    // Set placeholder name on initial load (new client connected)
    state.name[clientID] = name;
  }, []);

  return (
    <div className="max-w-screen-sm h-screen mx-auto outline flex flex-col">
      <Header />
      <Messages />
      <InputBox />

      <h3>Name (Current: {state.name[clientID]})</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          state.name[clientID] = name;
          setName("");
        }}
      >
        <input
          className="outline"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default App;
