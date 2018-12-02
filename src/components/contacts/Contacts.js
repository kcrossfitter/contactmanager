import React, { Component, Fragment } from 'react'

import Contact from './Contact'
import { Consumer } from '../../context'

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          return (
            <Fragment>
              <h3 className="display-4 mb-2 text-center text-danger">
                Contact List
              </h3>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts
