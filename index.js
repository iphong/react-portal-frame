import Types from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

class UIFrame extends React.Component {
	static propTypes = {
		children: Types.any,
		style: Types.object,
		onLoad: Types.func
	}
	componentWillMount() {
		this.el = document.createElement('div')
		this.setState({ loaded: false })
	}
	componentDidMount() {
		this.frame.addEventListener('load', e => {
			this.document.body.appendChild(this.el)
			if (typeof this.props.onLoad === 'function')
				this.props.onLoad(e, this)
			this.setState({
				loaded: true
			})
		})
	}
	get document() {
		return this.frame ? this.frame.contentDocument : void 0
	}
	get window() {
		return this.frame ? this.frame.contentWindow : void 0
	}
	render() {
		return (
			<iframe
				{...this.props}
				ref={ref => (this.frame = ref)}
				srcDoc={`<!DOCTYPE html>`}
				style={{
					border: 0,
					border: 0,
					width: '100%',
					height: '100%',
					...this.props.style
				}}
			>
				{ReactDOM.createPortal(
					this.state.loaded ? this.props.children : null,
					this.el
				)}
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
				<button onClickCapture={e => console.log('click button')}>
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
			<div>
				<h3 onClick={e => console.log('click button')}>Testing</h3>
				<UIFrame onClick={e => console.log('click button')}>
					<h3>This is frame content</h3>
					<Child onClick={e => console.log('click button')} />
				</UIFrame>
			</div>
		)
	}
}

ReactDOM.render(<Parent />, root)
