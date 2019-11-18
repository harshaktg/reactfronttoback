import React, { Component } from 'react'

// uncontrolled components and refs - without any state
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }
    console.log(contact);
  }; a

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card mb-3'>
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter name" name="name" defaultValue={name} ref={this.nameInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control form-control-lg" placeholder="Enter email" name="email" defaultValue={email} ref={this.emailInput} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter phone" name="phone" defaultValue={phone} ref={this.phoneInput} />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
          </form>
        </div>
      </div>
    )
  }
}

AddContact.defaultProps = {
  name: 'Harsha',
  email: 'asdf@asdf.com',
  phone: '7878989876'
};

export default AddContact;
