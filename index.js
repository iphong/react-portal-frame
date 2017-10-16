import Types from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

class Frame extends React.Component {
	static propTypes = {
		children: Types.any,
		style: Types.object,
		onLoad: Types.func
	}
	static childContextTypes = {
		frame: Types.element,
		window: Types.element,
		document: Types.element
	}
	getChildContext() {
		const self = this
		return {
			frame: this.frame,
			window: this.window,
			document: this.document
		}
	}
	componentWillMount() {
		this.el = document.createElement('div')
		this.onLoad = this.onLoad.bind(this)
	}
	get document() {
		return this.frame ? this.frame.contentDocument : void 0
	}
	get window() {
		return this.frame ? this.frame.contentWindow : void 0
	}
	onLoad(e) {
		console.log('loaded')
		this.document.body.appendChild(this.el)
		if (typeof this.props.onLoad === 'function')
			this.props.onLoad(e, this)
	}
	render() {
		return (
			<iframe
				ref={ref => (this.frame = ref)}
				srcDoc={`<!DOCTYPE html>`}
				onLoad={this.onLoad}
				style={{
					border: 0,
					width: '100%',
					...this.props.style
				}}
			>
				{ReactDOM.createPortal(this.props.children, this.el)}
			</iframe>
		)
	}
}

class Child extends React.Component {
	static contextTypes = {
		foo: Types.string
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
	render() {
		return (
			<div onClick={e => console.log('click')}>
				<h3>Testing</h3>
				<Frame>
					<h3 onClick={e => console.log('click button')}>This is frame content</h3>
					<Child />
				</Frame>
			</div>
		)
	}
}

ReactDOM.render(<Parent />, root)
