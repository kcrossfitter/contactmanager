import React, { Component } from 'react'
import axios from 'axios'
import uuid4 from 'uuid/v4'

import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } })
      return
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } })
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } })
      return
    }

    const newUser = await axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
        name,
        email,
        phone
      }
    })

    console.log(newUser.data)

    dispatch({
      type: 'ADD_CONTACT',
      payload: { ...newUser.data, id: uuid4() }
    })

    this.setState({ name: '', email: '', phone: '', errors: {} })

    this.props.history.push('/')
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="col-8 mx-auto">
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={e => this.onSubmit(dispatch, e)}>
                    <TextInputGroup
                      label="Name"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter name..."
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email..."
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter phone..."
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-secondary"
                    >
                      Add Contact
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
