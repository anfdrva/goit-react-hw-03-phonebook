import { ContactForm } from "./ContactForm/ContactForm";
import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";


export class App extends Component {

  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contact-items");
    if (savedContacts !== null) {
      const contacts = JSON.parse(savedContacts);
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contact-items", JSON.stringify(this.state.contacts))
    }
  }

  handlerChange = event => {
    this.setState({filter: event.target.value});
  };

  addContact = newContact => {

    const isContact = this.state.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (!isContact) {
      this.setState(prevState => ({
       contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
     }))
    } else {
      alert(`${newContact.name} is already in contacts`)
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  getVisibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return visibleContacts;
  }

  render() {

    const visibleItems = this.getVisibleContact();

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handlerChange} value={this.state.filter}/>
        <ContactList items={visibleItems} onDelete={this.deleteContact} />
    </div>
  );
  }
};

