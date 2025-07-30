import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./src/app/App";
import store from "./src/app/store.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

