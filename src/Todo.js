import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, priority, description }) {
  return (
    <div id={id} className="Todo">
      <div>
        <b>{title}</b> <small>(Priority: {priority})</small>
      </div>
      <div>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Todo;
