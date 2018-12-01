import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './app.styl'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // show: true
      list: []
    }
  }

  handleClick() {
    this.setState(prevState => ({
      // show: this.state.show ? false : true
      list: [...prevState.list, 'item']
    }))
  }

  render() {
    return (
      <>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            el.style.color = 'blue'
          }}
          appear={true}
        >
          <h1>React Animation</h1>
        </CSSTransition> */}
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = 'blue'
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={() => this.handleClick()}>Toggle</button>
      </>
    )
  }
}

export default App
