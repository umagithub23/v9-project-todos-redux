import { Provider } from "react-redux";

import { store } from "./store";
import { TaskList } from "./components/TaskList";

export const App = () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
);
