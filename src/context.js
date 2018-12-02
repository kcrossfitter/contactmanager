import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [],
    loading: false,
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    const response = await axios('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
    this.setState({
      contacts: response.data,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return <h1 className="text-center">Loading...</h1>
    }
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
