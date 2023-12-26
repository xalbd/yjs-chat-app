import React, { useEffect } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "./store";
import Messages from "./components/Messages";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import SettingsModal from "./components/SettingsModal";

function App() {
  const state = useSyncedStore(store);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  useEffect(() => {
    // Set placeholder name on initial load (new client connected)
    state.name[awareness.clientID] = "Placeholder";
  }, []);

  return (
    <>
      <div className="max-w-screen-sm h-screen mx-auto flex flex-col">
        <Header openSettings={() => setSettingsOpen(true)} />
        <Messages />
        <InputBox />
        <SettingsModal
          isOpen={settingsOpen}
          closeModal={() => setSettingsOpen(false)}
        />
      </div>
      <SettingsModal
        isOpen={settingsOpen}
        closeModal={() => setSettingsOpen(false)}
      />
    </>
  );
}

export default App;
