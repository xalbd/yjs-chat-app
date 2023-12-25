import React, { useEffect } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "./store";

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
    <div>
      <p>Messages:</p>
      {state.messages.map((message) => {
        return (
          <>
            <p>{`${state.name[message.clientID]} ${message.content}`}</p>
          </>
        );
      })}

      <p>Message</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          state.messages.push({
            content: message,
            clientID,
          });
          setMessage("");
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(event) => {
            const currentMessage = event.target.value;
            setMessage(currentMessage);
            awareness.setLocalStateField("message", currentMessage);
          }}
        />
      </form>

      <p>Name (Current: {state.name[clientID]})</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          state.name[clientID] = name;
          setName("");
        }}
      >
        <input
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
