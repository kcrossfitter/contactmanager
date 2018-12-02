import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false,
    adding: false
  }

  onShowClick = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }))
  }

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios({
        method: 'delete',
        url: `https://jsonplaceholder.typicode.com/users/${id}`
      })

      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    } catch (error) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    }
  }

  render() {
    const {
      contact: { id, name, email, phone }
    } = this.props

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-body">
                <h4>
                  {name}{' '}
                  <i
                    className="fas fa-sort-down"
                    style={{ cursor: 'pointer' }}
                    onClick={this.onShowClick}
                  />
                  <i
                    className="fas fa-times float-right text-danger"
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.onDeleteClick(id, dispatch)}
                  />
                  <Link to={`/contact/edit/${id}`}>
                    <i className="fas fa-pencil-alt float-right mr-3 text-secondary" />
                  </Link>
                </h4>
                {this.state.showContactInfo && (
                  <ul className="list-group float-none">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                )}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact
