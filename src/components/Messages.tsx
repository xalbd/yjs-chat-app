import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "../store";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import TypingMessage from "./TypingMessage";
import React from "react";

function Messages() {
  const state = useSyncedStore(store);
  const [typingMessages, setTypingMessages] = React.useState<
    Array<{ clientID: number; message: string }>
  >([]);

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
          return x.message?.length > 0 && x.clientID !== awareness.clientID;
        })
    );
  });

  function getTimeString(timestamp: number) {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <div className="overflow-auto flex flex-col-reverse pb-2 border-x border-black">
      {/* Nested div ensures proper scrolling behavior */}
      <div>
        {state.messages.map((message, index) =>
          awareness.clientID === message.clientID ? (
            <SentMessage
              message={message.content}
              tag={getTimeString(message.time)}
              key={index}
            />
          ) : (
            <ReceivedMessage
              message={message.content}
              tag={`${state.name[message.clientID] ?? "N/A"}, ${getTimeString(
                message.time
              )}`}
              key={index}
            />
          )
        )}
        {typingMessages.map((message) => (
          <TypingMessage
            message={message.message}
            tag={state.name[message.clientID] ?? ""}
            key={message.clientID}
          />
        ))}
      </div>
    </div>
  );
}

export default Messages;
