import React, { PureComponent } from 'react';
import { observable, action, runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject(stores => ({todoStore: stores.store.todo}))
@observer
export default class TodoItem extends PureComponent {
	@observable isEditing = false;

	render() {
		const { todo } = this.props;
		const className = `TodoItem${(todo.done ? ' is-done' : '')}${(this.isEditing ? ' is-editing' : '')}`;

		return (
			<div className={className} onClick={this.handleClick}>
				{!this.isEditing &&
					<input
						type="checkbox"
						checked={todo.done}
						onChange={this.toggleDone}
					/>
				}

				<span className="TodoItem-task" onDoubleClick={this.setEditing}>
					{this.isEditing
						? <input
								defaultValue={todo.text}
								onBlur={this.updateText}
								autoFocus={true}
								onFocus={this.selectText}
							/>
						: todo.text
					}
				</span>

				{!this.isEditing &&
					<span className="TodoItem-actions">
						<button onClick={this.handleDelete}>delete</button>
					</span>
				}
			</div>
		)
	}

	@autobind
	handleClick(event) {
		if (event.type !== 'change' && event.target.tagName === 'INPUT') {
			return;
		}

		if (event.altKey) {
			this.toggleDone();
		}
	}

	@autobind
	toggleDone(event) {
		this.props.todoStore.toggleDone(this.props.todo.id);
	}

	@autobind
	handleDelete(event) {
		this.props.todoStore.delete(this.props.todo.id);
	}

	@action.bound
	setEditing(event) {
		this.isEditing = true;
	}

	@autobind
	selectText(event) {
		event.target.select();
	}

	@autobind
	updateText(event) {
		runInAction(() => {
			this.props.todo.text = event.target.value.trim() || this.props.todo.text;
			this.isEditing = false;
		});
	}
}
