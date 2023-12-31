import React from "react";
import Modal from "react-modal";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "../store";
import { X } from "react-feather";
import { ModalProps } from "../types/ModalProps";

function SettingsModal({ isOpen, closeModal }: ModalProps) {
  const state = useSyncedStore(store);
  const [name, setName] = React.useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="w-dvh h-dvh flex justify-center items-center"
      overlayClassName="fixed inset-0 bg-white/90"
      shouldReturnFocusAfterClose={false}
    >
      <div className="min-w-0 max-w-lg p-4 m-4 border border-black rounded-lg flex-1">
        <div className="flex flex-row items-center">
          <h1 className="font-medium text-2xl flex-1">Settings</h1>
          <button className="rounded-full" onClick={closeModal}>
            <X />
          </button>
        </div>

        <p className="py-2">
          Current Username: {state.name[awareness.clientID]}
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (name.length === 0) return;

            state.name[awareness.clientID] = name;
            setName("");
          }}
          className="flex flex-col"
        >
          <label htmlFor="username" className="pb-1">
            Set Username:
          </label>
          <div className="flex flex-row">
            <input
              className="flex-1 min-w-0 px-3 py-1 rounded-lg outline outline-1"
              type="text"
              value={name}
              id="username"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button className="rounded-lg outline outline-1 ml-2 px-3 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default SettingsModal;
