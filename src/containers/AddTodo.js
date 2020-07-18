import React, { useState } from "react";
import { addTodo } from "../reducers/slices/todosSlice";
import { connect } from "react-redux";

const mapDispatchToProps = { addTodo };

const AddTodo = ({ addTodo }) => {
    const [todoInputValue, setTodoInputValue] = useState("");

    const handleTodoInputValueChanged = e => setTodoInputValue(e.target.value);

    const handleAddTodoClicked = () => {
        if (todoInputValue.trim().length == 0) return;
        addTodo({ text: todoInputValue });
        setTodoInputValue("");
    }

    return (
        <div className="row" >
            <div className="col p-0">
                <input
                    type="text"
                    className="form-control"
                    onChange={handleTodoInputValueChanged}
                    value={todoInputValue}
                />
            </div>
            <div className="col-auto pl-2 pr-0">
                <button
                    type="button"
                    className="form-control"
                    onClick={handleAddTodoClicked}
                >
                    Add
            </button>
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(AddTodo);