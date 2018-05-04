# React Portal Frame
Rendering components inside iframes using react portal.

## Basic Usage

```jsx harmony
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

```jsx harmony
import PortalFrame from 'react-portal-frame'

class MyComponent extends React.Component {
  handleClick = e => {
    console.log(e.target, e.target.ownerDocument.defaultView.frameElement)
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

## Styled Component Support

React Portal Frame is fully aware of styled-components, so your components render within iframe can be beautifully styled and this is done automatically so you don't have to do anything.   

```jsx harmony
import PortalFrame from 'react-portal-frame'
import styled from 'styled-component'

const MyPrettyComponent = styled.div`
    color: red;
`

class MyComponent extends React.Component {
  render() {
    return <div>
      <PortalFrame>
        <MyPrettyComponent>Lorem Ipsum Dolor Sit Amet</MyPrettyComponent>
      </PortalFrame>
    </div>
  }
}
```
