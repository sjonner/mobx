import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
	render() {
		return (
			<div className="Todo-list">
				{this.props.children}
			</div>
		);
	}
}
