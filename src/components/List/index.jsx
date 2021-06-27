import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		todos:PropTypes.array.isRequired,
		updateTodo:PropTypes.func.isRequired,
		deleteTodo:PropTypes.func.isRequired,
	}

	render() {
		const {todos,updateTodo,deleteTodo} = this.props
		const unDones = todos.filter(todo=>!todo.done)
		const dones = todos.filter(todo=>todo.done)
		return (
			<div>
				<h3>未完成<span className="todo-count">{unDones.length}</span></h3>
				<ul className="todo-main">
					{
						unDones.map( todo =>{
							return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
						})
					}
				</ul>

				<h3>已完成<span className="todo-count">{dones.length}</span></h3>
				<ul className="todo-main">
					{
						dones.map( todo =>{
							return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
						})
					}
				</ul>

			</div>
			
		)
	}
}