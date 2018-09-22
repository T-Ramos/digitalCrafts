import React from 'react';

export default class Form extends React.Component {

    constructor() {
      super();
      this.state = {
        contact: []
      }
    }

    componentWillMount(){
      let tempContact = {
        name: "Mike",
        email: "mike@mik.com",
        phoneNum: "71354084711", 
        address: "3515 cypress", 
        city: "houstons", 
        state: "texas", 
        zip: "77388"
      }
      let tempContactArray = this.state.contact;
      tempContactArray.push(tempContact);
      this.setState({contact: tempContactArray})
    }

    handleSubmit(event) {

      event.preventDefault();

      let tempContact = {
        name: this.refs.name.value, 
        email: this.refs.email.value, 
        phoneNum: this.refs.phoneNum.value, 
        address: this.refs.address.value, 
        city: this.refs.address.value, 
        state: this.refs.address.value, 
        zip: this.refs.zip.value
      }

      let tempContactArray = this.state.contact;

      tempContactArray.push(tempContact);
      
      this.setState({contact: tempContactArray}, function(){
        console.log(this.state.contact);
        
      }
      )

    }

    deleteItem(number) {
      this.props.deleted(number);
  }

  editItem(number) {
      this.props.edited(number);
  }

    render() {

      var displayContact = this.state.contact.map(contact => {
        return (<div>
          <div>{contact.name}</div>
          <br />
          <div>{contact.email}</div>
          <br />
          <div>{contact.phoneNum}</div>
          <br />
          <div>{contact.address}</div>
          <br />
          <div>{contact.city}</div>
          <br />
          <div>{contact.state}</div>
          <br />
          <div>{contact.zip}</div>
          <input type="button" value='Delete' onClick={this.deleteItem.bind(this, this.state.contact.number)} />
          <input type="button" value='Edit' onClick={this.editItem.bind(this, this.state.contact.number)} />
          </div>
          
          )
      })

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
          <br />
          <div>
            {displayContact}
          </div>
        </div>
        );
      }
    }

