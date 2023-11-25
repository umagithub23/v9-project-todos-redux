import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../reducers/tasks";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleFormSubmit = () => {
    dispatch(addTask(taskText));
    setTaskText("");
  };

  return (
    <div className="add-task-wrapper">
      <form onSubmit={handleFormSubmit}>
        <textarea
          id="textArea"
          rows="3"
          placeholder="Add Todo!"
          value={taskText}
          onChange={handleTaskTextChange}
        ></textarea>
        <button id="submitButton" type="submit" disabled={taskText.length <= 0}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
