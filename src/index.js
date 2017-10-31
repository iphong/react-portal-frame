import Types from 'prop-types'
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import events from './events'

const noop = () => {}
const EVENTS = {}
events.forEach(e => (EVENTS[e] = noop))

export default class PortalFrame extends PureComponent {
	static displayName = 'PortalFrame'
	static propTypes = {
		children: Types.any,
		style: Types.object,
		head: Types.any
	}
	static childContextTypes = {
		frame: Types.any,
		window: Types.any,
		document: Types.any
	}
	getChildContext() {
		return {
			frame: this.frame,
			window: this.window,
			document: this.document
		}
	}
	componentWillMount() {
		this.handleLoad = this.handleLoad.bind(this)
		this.el = document.createElement('div')
		this.setState({ loaded: false })
	}
	componentDidMount() {
		this.frame.addEventListener('load', this.handleLoad, true)
	}
	componentWillUnmount() {
		this.frame.removeEventListener('load', this.handleLoad, true)
		delete this.frame
		delete this.el
	}
	handleLoad() {
		this.document.head.innerHTML = this.props.head || ''
		const root = this.frame.contentDocument.querySelector('html')
		this.frame.contentDocument.body.remove()
		this.setState({ root })
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
				ref={el => (this.frame = el)}
				srcDoc={`<!DOCTYPE html>`}
				style={{
					border: 0,
					border: 0,
					width: '100%',
					...this.props.style
				}}
			>
				{this.state.root
					? ReactDOM.createPortal(
							<body {...EVENTS}>
								{this.props.children}
							</body>,
							this.state.root
						)
					: null}
			</iframe>
		)
	}
}
