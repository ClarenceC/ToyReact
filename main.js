import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      a: 1,
      b: 2
    }
  }
  render() {
    return <div>
      <h1>my component</h1>
      <button onclick={() => { this.state.a++; this.rerender() }}>add</button>
      <span>{this.state.a.toString()}</span>
    </div>
  }
}


render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
)