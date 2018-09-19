import React from 'react';

class Form extends React.Component {

    constructor() {
      super();
      this.state = {
        contact: {}
      }
    }

    handleSubmit(event) {

      event.preventDefault();
      this.setState({contact: {
        name: this.refs.name.value, 
        email: this.refs.email.value, 
        phoneNum: this.refs.phoneNum.value, 
        address: this.refs.address.value, 
        city: this.refs.address.value, 
        state: this.refs.address.value, 
        zip: this.refs.zip.value
        }
      }, function(){
        console.log(this.state.contact);
      }
      )

      
      event.preventDefault();
    }

    render() {
        return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input type="text" ref="name"/>
            </label>
            <label>
              Email:
              <input type="text" ref='email' />
            </label>
            <label>
              Phone Number:
              <input type="text" ref='phoneNum'/>
            </label>
            <label>
              Address:
              <input type="text" ref='address' />
            </label>
            <label>
              City:
              <input type="text" ref='city' />
            </label>
            <label>
              State:
              <input type="text" ref='state'  />
            </label>
            <label>
              Zip Code:
              <input type="text" ref='zip'  />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
            <br />
            {this.state.contact.name}
            <br />
            {this.state.contact.email}
            <br />
            {this.state.contact.phoneNum}
            <br />
            {this.state.contact.address}
            <br />
            {this.state.contact.city}
            <br />
            {this.state.contact.state}
            <br />
            {this.state.contact.zip}
          </div>
        </div>
        );
      }
    }

export default Form;