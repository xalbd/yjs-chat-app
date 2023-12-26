import React from "react";
import Modal from "react-modal";
import { useSyncedStore } from "@syncedstore/react";
import { store, awareness } from "../store";
import { ModalProps } from "../types/ModalProps";

function SetupModal({ isOpen, closeModal }: ModalProps) {
  const state = useSyncedStore(store);
  const [name, setName] = React.useState("");

  return (
    <Modal
      isOpen={isOpen}
      className="outline-none max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2	-translate-y-1/2"
      shouldReturnFocusAfterClose={false}
    >
      <div className="min-w-0 p-4 m-4 border border-black rounded-lg flex-1">
        <div className="flex flex-row items-center">
          <h1 className="font-medium text-2xl flex-1">
            Choose a username to chat!
          </h1>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (name.length === 0) return;

            state.name[awareness.clientID] = name;
            closeModal();
          }}
          className="flex flex-col"
        >
          <label htmlFor="username" className="pb-1">
            This can be changed later.
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

export default SetupModal;
