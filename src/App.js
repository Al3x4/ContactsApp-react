import React, { Component } from 'react'
import ListContacts from './ListContacts'

import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'


class App extends Component {
  
  state = {
    contacts : []
  }
  componentDidMount() {
    ContactsAPI.getAll().then(contacts => (
      this.setState({contacts})
      ))
  }

  createContact = (inputedContact) => {
    ContactsAPI.create(inputedContact)
    .then( (newContact) => {
      this.setState( state => ({
        contacts: state.contacts.concat([newContact])
      }))
    })
  }



  removeContact = (clickedContact) => {
    this.setState((previousState) => ({
      contacts: previousState.contacts.filter((contactInState) => contactInState.id !== clickedContact.id)
    }))
    ContactsAPI.remove(clickedContact);

  }

  render() {
    return (
      <div>
        <Route
          path='/' exact
          render= {() => (
            <ListContacts onDeleteContact = {this.removeContact} contacts = {this.state.contacts}/>
          )}
        />

        <Route
          path='/create'
          //we used component and not render as above because we didnt need to pass in props
          render={({history}) => (
            <CreateContact onCreateContact = {(contact) => {
              this.createContact(contact);
              history.push('/')
            }} 
            />
          )}
        />
      </div>
    )
  }

}



export default App;
