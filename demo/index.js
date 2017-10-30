import Types from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactFrame from '../src/frame'

class Child extends React.Component {
	static contextTypes = {
		foo: Types.string,
		frame: Types.any,
		window: Types.any,
		document: Types.any
	}
	componentWillUnmount() {
		console.log('child unmounting')
	}
	render() {
		return (
			<div>
				<button>
					{this.context.foo}
				</button>
			</div>
		)
	}
}

class Parent extends React.Component {
	static childContextTypes = {
		foo: Types.string
	}
	getChildContext() {
		return {
			foo: 'bar'
		}
	}
	componentWillMount() {
		this.setState({ hidden: false })
	}
	componentWillUnmount() {
		console.log('parent unmounting')
	}
	render() {
		return (
			<div onClick={e => console.log('click button', e.target)}>
				<h3
					onClick={e => this.setState({ hidden: !this.state.hidden })}
				>
					Testing
				</h3>
				<ReactFrame>
					<h3>This is frame content</h3>
					{this.state.hidden ? <Child /> : null}
				</ReactFrame>
			</div>
		)
	}
}

ReactDOM.render(<Parent />, root)
