import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  getDataOnSubmit = data => {
    const { contacts } = this.state;
    const checkName = contacts.find(({ name }) => name === data.name);

    if (checkName) {
      alert(`${checkName.name} is already in contacts.`);
    } else {
      const newContactData = {
        id: nanoid(),
        ...data,
      };
      this.setState(({ contacts }) => ({
        contacts: [newContactData, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCase = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCase)
    );
    return visibleContacts;
  };

  deleteContact = deleteId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(c => c.id !== deleteId),
    }));
  };

  render() {
    const { filterContacts, getDataOnSubmit, changeFilter, deleteContact } =
      this;
    const { filter } = this.state;
    const filterContactsList = filterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form getData={getDataOnSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <Contacts
          contactsList={filterContactsList}
          deleteContact={deleteContact}
        />
      </>
    );
  }
}

export default App;
