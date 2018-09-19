import React from 'react'

export default class ContactItem extends React.Component {
    
    render () {

        return (
            <div>
                Name: {this.props.contact.name}
                <br />
                email: {this.props.contact.email}
                <br />
                Number: {this.props.contact.phoneNum}
                <br />
                Address: {this.props.contact.address}
                <br />
                City: {this.props.contact.city}
                <br />
                State: {this.props.contact.state}
                <br />
                Zip Code: {this.props.contact.zip}
                <br />
            </div>

        );
    }
    
}


