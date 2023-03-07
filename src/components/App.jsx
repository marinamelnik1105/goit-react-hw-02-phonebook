import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Layout } from "./Layout.styled";
export class App extends Component

{
state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }
  addContacts = newContacts =>
  {
    this.setState(prevState =>
    {
      return {
      contacts: [...prevState.contacts, newContacts]}
    })
    
  }
  deleteContacts = contactId =>
  {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = (e) =>
  {
    this.setState({ filter: e.target.value })
  }
  getVisibleContacts = () =>
  {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  render(){
    const {  filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts();
  return (
    <Layout>
      <GlobalStyle/>
      <h1>Phonebook</h1>
      <ContactForm onSave={this.addContacts} />
      <h2>Contacts</h2>
      <Filter FilterValue={filter} onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContacts} />  
      
    </Layout>
  );
  }
  
}
