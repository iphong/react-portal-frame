/* hello */
const React = require('react')
const ReactDOM = require('react-dom')
const Types = require('prop-types')
const { StyleSheetManager } = require('styled-components')

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

export default class UIFrame extends React.PureComponent {
	static displayName = 'PortalFrame'
	static propTypes = {
		style: Types.object,
		head: Types.string,
		frameDidLoad: Types.func,
		children: Types.oneOfType([Types.func, Types.node])
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
	state = { loaded: false }
	handleLoad = this._handleLoad.bind(this)

	componentDidMount() {
		this.frame.addEventListener('load', this.handleLoad, true)
	}
	componentWillUnmount() {
		this.frame.removeEventListener('load', this.handleLoad, true)
		delete this.frame
	}
	_handleLoad(e) {
		const root = this.frame.contentDocument.querySelector('html')
		this.frame.contentDocument.body.remove()
		this.setState({ root, loaded: true }, () => {
			if (this.props.frameDidLoad) {
				this.props.frameDidLoad()
			}
		})
	}
	get document() {
		return this.frame ? this.frame.contentDocument : undefined
	}
	get window() {
		return this.frame ? this.frame.contentWindow : undefined
	}
	render() {
		// eslint-disable-next-line no-unused-vars
		const { frameDidLoad, children, ...restProps } = this.props
		return (
			<iframe
				{...restProps}
				ref={el => (this.frame = el)}
				name="React Portal Frame"
				srcDoc={`<!DOCTYPE html><html><head>${this.props.head ||
					''}</head></html>`}
				style={{
					border: 0,
					width: '100%',
					...this.props.style
				}}
			>
				{this.state.loaded && this.state.root
					? ReactDOM.createPortal(
							<StyleSheetManager
								target={this.frame.contentDocument.head}
							>
								<body {...EVENTS}>
									{' '}{children}
								</body>
							</StyleSheetManager>,
							this.state.root
						)
					: null}
			</iframe>
		)
	}
}
