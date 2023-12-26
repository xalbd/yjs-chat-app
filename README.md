# Y.js Chat App

## Run Locally

Run `./start` in the root of the repository. A recent version of Node.js is required. This starts a Y.js provider server using a Websocket-based backend running on Node as well as the front-end site using Vite.

Visit the site by navigating to (by default) `http://localhost:5173/`. If this URL does not work, check the console to see if Vite deployed to a different address. In addition, check that nothing else is deployed on `http://localhost:1234`, the address the websocket provider is deployed on.

## Expose to Network

To start the front-end and expose it to the network instead of just to localhost, run `npx vite --host`. Note the IP address under the "Network" bullet once Vite starts.

In `src/store.ts`, replace `ws://localhost:1234` with `ws://<IP_ADDRESS>:1234`. Finally, run `HOST=<IP_ADDRESS> npx y-websocket` to start the provider server.

On the same network, other devices should be able to access the chat app at `http://<IP_ADDRESS>:5173` now!
