import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      Your components can be mounted here, inside the Provider.
    </Provider>
  );
};
