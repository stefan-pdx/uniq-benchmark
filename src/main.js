import App from "./App.svelte";

let target = document.querySelector("main");

const app = new App({ target });

export default app;