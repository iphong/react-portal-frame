# React Portal Frame
Rendering components inside iframes using react portal.

## Basic Usage

```js
import PortalFrame from 'react-portal-frame'

const MyComponent = props => {
  return <PortalFrame>
    <MyOtherComponent1 />
    <MyOtherComponent2 />
    <MyOtherComponent3 />
  </PortalFrame>
}
```

## Capturing Events

One unique feature of this component is that it fully supports react synthetic event bubbling & capturing. It means that you can capture events inside iframe from parent containers.

```js
import PortalFrame from 'react-portal-frame'

class MyComponent extends React.Component {
  handleClick = e => {
    console.log(e.target)
  }
  render() {
    return <div onClick={this.handleClick}>
      <PortalFrame>
        <h3>iFrame Content</h3>
        <div>
          <p>lorem ipsum dolor sit amet....</p>
          <button>Click Here</button>
        </div>
      </PortalFrame>
    </div>
  }
}
```
