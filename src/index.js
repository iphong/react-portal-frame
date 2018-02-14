const React = require('react')
const ReactDOM = require('react-dom')
const Types = require('prop-types')

const noop = () => {}
const EVENTS = [
	'Copy',
	'Cut',
	'Paste',
	'CompositionEnd',
	'CompositionStart',
	'CompositionUpdate',
	'KeyDown',
	'KeyPress',
	'KeyUp',
	'Focus',
	'Blur',
	'Change',
	'Input',
	'Invalid',
	'Submit',
	'Click',
	'ContextMenu',
	'DoubleClick',
	'Drag',
	'DragEnd',
	'DragEnter',
	'DragExit',
	'DragLeave',
	'DragOver',
	'DragStart',
	'Drop',
	'MouseDown',
	'MouseEnter',
	'MouseLeave',
	'MouseMove',
	'MouseOut',
	'MouseOver',
	'MouseUp',
	'Select',
	'TouchCancel',
	'TouchEnd',
	'TouchMove',
	'TouchStart',
	'Scroll',
	'Wheel',
	'Abort',
	'CanPlay',
	'CanPlayThrough',
	'DurationChange',
	'Emptied',
	'Encrypted',
	'Ended',
	'Error',
	'LoadedData',
	'LoadedMetadata',
	'LoadStart',
	'Pause',
	'Play',
	'Playing',
	'Progress',
	'RateChange',
	'Seeked',
	'Seeking',
	'Stalled',
	'Suspend',
	'TimeUpdate',
	'VolumeChange',
	'Waiting',
	'Load',
	'Error',
	'AnimationStart',
	'AnimationEnd',
	'AnimationIteration',
	'TransitionEnd',
	'Toggle'
].reduce((m, e) => {
	m[`on${e}`] = noop
	if (e !== 'MouseEnter' && e !== 'MouseLeave') m[`on${e}Capture`] = noop
	return m
}, {})

module.exports = class extends React.PureComponent {
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
	constructor() {
		super()
		this.handleLoad = this.handleLoad.bind(this)
		this.el = document.createElement('div')
		this.state = { loaded: false }
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
		if (this.frame.contentDocument.body.hasOwnProperty('remove')) {
			this.frame.contentDocument.body.remove()
		} else {
			this.frame.contentDocument.body.parentNode.removeChild(this.frame.contentDocument.body)
		}
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
