# Opa in wasm with react

This is a test project to see how I can get [Open Policy Agent](https://www.openpolicyagent.org/)

## Getting Started

### Setup

`yarn init`

The important module here is [@open-policy-agent/opa-wasm](https://www.npmjs.com/package/@open-policy-agent/opa-wasm)

Build the client with: `yarn build`. If using [Vs code](https://code.visualstudio.com/) run the server with the lauch server configuration (server will be build by "pre-launch" task), if not using vs code server need to be built and run manually.

### Usage

Navigate to `http://localhost:2000` in the browser and click `Evaluate`