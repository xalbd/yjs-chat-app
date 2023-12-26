import { Settings } from "react-feather";

interface HeaderProps {
  openSettings: () => void;
}

function Header({ openSettings }: HeaderProps) {
  return (
    <div className="border border-black flex flex-row px-4 py-2 items-center">
      <h1 className="flex-1 text-2xl font-medium">Chat</h1>
      <button
        className="p-2 rounded-full outline outline-1"
        onClick={openSettings}
      >
        <Settings className="stroke-1" />
      </button>
    </div>
  );
}

export default Header;
