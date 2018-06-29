import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as Contacts from './utils/ContactsAPI'

class App extends Component {
  
  state = {
    contacts : []
  }

  componentDidMount() {
    Contacts.getAll().then((contacts) => (
      this.setState({contacts})
      ))
  }



  removeContact = (clickedContact) => {
    this.setState((previousState) => ({
      contacts: previousState.contacts.filter((contactInState) => contactInState.id !== clickedContact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact = {this.removeContact} contacts = {this.state.contacts}/>
        <CreateContact/>
      </div>
    )
  }

}



export default App;
