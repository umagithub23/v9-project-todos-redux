import { Provider } from "react-redux";

import { store } from "./store";
import { TaskList } from "./components/TaskList";
import AddTask from "./components/AddTask";

export const App = () => (
  <Provider store={store}>
    <AddTask />
    <TaskList />
  </Provider>
);
