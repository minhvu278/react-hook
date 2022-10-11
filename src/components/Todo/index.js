//Init state
import {useReducer, useRef} from "react";
import reducer, {initState} from "./reducer";
import {addJob, deleteJob, setJob} from "./actions";

function Todo() {

    const [state, dispatch] = useReducer(reducer, initState)

    const {job, jobs} = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div className="App" style={{padding: '20px'}}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li
                        key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;
