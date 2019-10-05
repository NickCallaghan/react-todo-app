import React from 'react';
import Main from '../pages/Main';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: {
				1: {
					index: 1,
					key: 1,
					task: 'Feed the cat',
					complete: true,
				},
				2: {
					index: 2,
					key: 2,
					task: 'Walk the cat',
					complete: false,
				},
				3: {
					index: 3,
					key: 3,
					task: 'Play with the cat',
					complete: false,
				},
			},
			filter: 'all',
		};
	}

	updateToDo = (key, updateToDo) => {
		let todos = { ...this.state.todos };
		todos[key] = updateToDo || undefined;
		this.setState({ todos });
	};

	deleteToDo = key => {
		let todos = { ...this.state.todos };
		delete todos[key];
		this.setState({ todos });
	};

	updateFilter = newFilter => {
		const updatedFilter = newFilter;
		this.setState({ filter: updatedFilter });
	};

	render() {
		return (
			<div className="todo-container">
				<h1 className="main-heading">Happy Cat To Do List</h1>
				<p className="sub-heading">Happy cats mean completed todos</p>
				<Main
					filter={this.state.filter}
					todos={this.state.todos}
					updateToDo={this.updateToDo}
					deleteToDo={this.deleteToDo}
					updateFilter={this.updateFilter}
				/>
			</div>
		);
	}
}

export default App;
