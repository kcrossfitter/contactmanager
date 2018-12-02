import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  componentDidMount = () => {
    this.nameInput.current.focus()
  }

  static defaultProps = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = e => {
    e.preventDefault()
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact)
  }

  render() {
    const { name, email, phone } = this.props

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-block btn-secondary"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact
