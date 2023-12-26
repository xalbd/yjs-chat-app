import React from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "../store";
import { Send } from "react-feather";

function InputBox() {
  const state = useSyncedStore(store);
  const [message, setMessage] = React.useState("");

  function updateMessage(newMessage: string) {
    setMessage(newMessage);
    awareness.setLocalStateField("message", newMessage);
  }

  function pushMessage() {
    if (message.length === 0) return;

    state.messages.push({
      content: message,
      clientID: awareness.clientID,
      time: Date.now(),
    });
    updateMessage("");
  }

  return (
    <div className="outline flex flex-row px-4 py-2">
      <form
        className="flex flex-1 min-w-0"
        onSubmit={(event) => {
          event.preventDefault();
          pushMessage();
        }}
      >
        <input
          className="flex-1 min-w-0 px-3 py-2 mr-4 rounded-2xl outline"
          type="text"
          value={message}
          onChange={(event) => {
            updateMessage(event.target.value);
          }}
        />
        <button className="p-2 rounded-full outline self-center">
          <Send className="" />
        </button>
      </form>
    </div>
  );
}

export default InputBox;
