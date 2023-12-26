import React, { useEffect } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "./store";
import Messages from "./components/Messages";

function App() {
  const clientID = awareness.clientID;

  const state = useSyncedStore(store);
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("Placeholder");

  useEffect(() => {
    // Set placeholder name on initial load (new client connected)
    state.name[clientID] = name;
  }, []);

  return (
    <div className="max-w-xl mx-auto outline">
      <Messages />

      <h3>Message</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          state.messages.push({
            content: message,
            clientID,
            time: Date.now(),
          });
          setMessage("");
          awareness.setLocalStateField("message", "");
        }}
      >
        <input
          type="text"
          className="outline"
          value={message}
          onChange={(event) => {
            const currentMessage = event.target.value;
            setMessage(currentMessage);
            awareness.setLocalStateField("message", currentMessage);
          }}
        />
      </form>

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
