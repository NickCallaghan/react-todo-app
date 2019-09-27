import React from 'react';
import { Consumer } from './context';

class ToDo extends React.Component {
	handleToggleTodo = event => {
		event.preventDefault();
		const key = event.currentTarget.id;
		let updatedTodo = {
			...this.props.todo,
		};
		updatedTodo.complete = !updatedTodo.complete;
		this.props.updateToDo(key, updatedTodo);
	};

	handleDeleteToDo = event => {
		event.preventDefault();
		const key = event.currentTarget.id;
		this.props.deleteToDo(key);
	};

	render() {
		const { index, task, complete, key } = this.props.todo;
		return (
			<Consumer>
      {context => (
				<div className={`todo-item ${complete ? 'checked' : 'not-checked'}`}>
					<input type="checkbox" key={`${key}`} id={`${index}`} checked={complete} />
					<label id={`${index}`} htmlFor={`${index}`} onClick={this.handleToggleTodo}>
						{task}
					</label>
					{/* <span
          id={`${index}`}
          className="remove-todo"
          onClick={this.handleDeleteToDo}
        >
          X
        </span> */}
				</div>
        )}
			</Consumer>
      
		);
	}
}

export default ToDo;
