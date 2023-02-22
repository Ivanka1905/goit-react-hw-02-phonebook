import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  };

  getDataOnSubmit = data => {
    const newContactData = {
      id: nanoid(),
      ...data,
    }
    this.setState(({contacts}) => ({
     contacts: [newContactData, ...contacts]
      }));
  };

  changeFilter = (e) => {
       this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Form getData={this.getDataOnSubmit} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <Contacts contactsList={this.state.contacts} />
      </>
    );
  }
}

export default App;
