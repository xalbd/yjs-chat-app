import React, { useEffect } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "./store";

function App() {
  const clientID = awareness.clientID;

  const state = useSyncedStore(store);
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("Placeholder");
  const [typingMessages, setTypingMessages] = React.useState<
    Array<{ clientID: number; message: string }>
  >([]);

  useEffect(() => {
    // Set placeholder name on initial load (new client connected)
    state.name[clientID] = name;
  }, []);

  // Update React state whenever messages being typed change
  awareness.on("change", () => {
    setTypingMessages(
      Array.from(awareness.getStates())
        .map(([clientID, state]) => {
          return {
            clientID,
            message: state.message,
          };
        })
        .filter((x) => {
          return x.message.length > 0;
        })
    );
  });

  return (
    <div>
      <h3>Messages:</h3>
      {state.messages.map((message) => {
        return <p>{`${state.name[message.clientID]} ${message.content}`}</p>;
      })}

      <h3>Typing:</h3>
      {typingMessages.map((x) => {
        return <p>{`${state.name[x.clientID]} ${x.message}`}</p>;
      })}

      <h3>Message</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          state.messages.push({
            content: message,
            clientID,
          });
          setMessage("");
          awareness.setLocalStateField("message", "");
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

      <h3>Name (Current: {state.name[clientID]})</h3>
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
