import React from 'react';

import ContactItem from './ContactItem.js';
import Form from './Form.js';
import ToggleDisplay from 'react-toggle-display';

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: [],
            oneContact: [],
            contactIndex: '',
            // show: false
        }
    }

    handleAddContact(contact) {
        let newContact = this.state.contact;
        newContact.push(contact);
        this.setState({ contact: newContact });
    }

    // handleDeleteContact(number) {
    //     let newContacts = this.state.contacts;
    //     let index = newContacts.findIndex(x => x.number === number)
    //     newContacts.splice(index, 1)
    //     this.setState({ contacts: newContacts });
    // };

    // handleEditContant(number) {
    //     let newContacts = this.state.contacts;
    //     let index = newContacts.findIndex(x => x.number === number)
    //     let contact = newContacts[index];
    //     this.setState({ oneContact: contact, contactIndex: index, show: !this.state.show })
    // };

    contactUpdated(contact) {
        let index = this.state.contactIndex;
        let newContact = this.state.contact;
        newContact.splice(index, 1, contact)
        this.setState({ contact: newContact, show: false });
    }

    render() {
        let contactItem;
        contactItem = this.state.contact.map(contact => {
            return (
                <ContactItem
                    key={contact.number}
                    contact={contact}
                    // deleted={this.handleDeleteContact.bind(this)}
                    // edited={this.handleEditContant.bind(this)}
                />
            );
        })
        return (
            <div>
                <div>
                    New Contact:
                    <Form
                        newContact={this.handleAddContact.bind(this)} />
                </div>
                <br />
                <div>
                    {contactItem}
                </div>
                {/* <ToggleDisplay show={this.state.show}>
                    <div>
                        Edit Contact:
                        <ContactEdit
                            contact={this.state.oneContact}
                            editedContact={this.contactUpdated.bind(this)} />
                    </div>
                </ToggleDisplay> */}
                <br />
            </div>
        )
    }
}

export default Contact;