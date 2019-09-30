import React from 'react';

const Todo = props => {

    return (

        <div className={`task${props.task.completed ? ' completed' : ''}`}
            onClick={() => props.toggleComplete(props.id)}>
            {console.log('TODO', props)}
            <p>{props.task}</p>
            <button

            // onClick={console.log('THIS IS ON TODO:', props.task.completed)}
            >Mark Complete</button>
        </div>
    )
}

export default Todo;