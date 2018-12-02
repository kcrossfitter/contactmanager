import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    this.setState({
      title: data.title,
      body: data.body
    })
  }

  render() {
    const { title, body } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test
