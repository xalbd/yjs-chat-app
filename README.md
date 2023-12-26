# Y.js Chat App

## Run Locally

Run `./start` in the root of the repository. A recent version of Node.js is required. This starts a Y.js provider server using a Websocket-based backend running on Node as well as the front-end site using Vite.

Visit the site by navigating to (by default) `http://localhost:5173/`. If this URL does not work, check the console to see if Vite deployed to a different address. In addition, check that nothing else is deployed on `http://localhost:1234`, the address the websocket provider is deployed on.
