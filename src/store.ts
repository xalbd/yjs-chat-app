import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

type Message = { content: string; clientID: number };
type Name = { [key: number]: string };

// Main Y.js document stores all messages/associated client IDs as well as map between client ID -> selected name
// Awareness CRDT holds messages being currently typed (conveniently also associated using client IDs)
export const store = syncedStore({
  messages: [] as Message[],
  name: {} as Name,
});

const doc = getYjsDoc(store);
export const websocketProvider = new WebsocketProvider(
  "ws://localhost:1234",
  "chat",
  doc
);
export const awareness = websocketProvider.awareness;

export const disconnect = () => websocketProvider.disconnect();
export const connnect = () => websocketProvider.connect();
