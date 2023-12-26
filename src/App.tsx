import React from "react";
import Messages from "./components/Messages";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import SettingsModal from "./components/SettingsModal";
import SetupModal from "./components/SetupModal";

function App() {
  const [setupComplete, setSetupComplete] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <div className="max-w-screen-sm h-screen mx-auto flex flex-col">
      <Header openSettings={() => setSettingsOpen(true)} />
      <Messages />
      <InputBox />
      <SettingsModal
        isOpen={settingsOpen}
        closeModal={() => setSettingsOpen(false)}
      />
      <SetupModal
        isOpen={!setupComplete}
        closeModal={() => setSetupComplete(true)}
      />
    </div>
  );
}

export default App;
