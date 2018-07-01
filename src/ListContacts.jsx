import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
	static propTypes = {
		contacts : PropTypes.array.isRequired,
		onDeleteContact : PropTypes.func.isRequired
	}
	state = {
		query: ''
	}
	updateQuery = (inputedQuery) => {
		this.setState({ query : inputedQuery.trim() })
	}

	clearQuery = () => this.setState({query : ''})

	render() {
		//destructuring objects to write less
		const {contacts, onDeleteContact} = this.props
		const {query} = this.state

		let showingContacts
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
		} else {
			showingContacts = this.props.contacts
		}
		showingContacts.sort(sortBy('name'))
		
		return(
<<<<<<< HEAD
			<div>
				<div>
||||||| merged common ancestors
			<div className='list-contacts'>
				<div>
=======
			<div className='list-contacts'>
				<div className="list-contacts-top">
>>>>>>> 8286265f7292613417ec920c6bbf18645c98955a
					<input 
						className='search-contacts' 
						type="text" 
						placeholder='Search Contacts' 
						value = {query} 
						onChange = {(event) => this.updateQuery(event.target.value)}
					/>
					<Link
					to = '/create'
					className = 'add-contact'
					></Link>
				</div>
				{showingContacts.length !== contacts.length && (
					<div className='showing-contacts'>
						<span>Now showing {showingContacts.length} of {contacts.length}</span>
						<button onClick={() => this.clearQuery()}>Show all</button>
					</div>
				)}

				<ol className="contact-list className='list-contacts'">
					{showingContacts.map((contact, index) => {
						return(
							<li key={contact.id} className='contact-list-item'>
								<div className='contact-avatar' style={{
									backgroundImage : `url(${contact.avatarURL})`
								}}>
								</div>
								
								<div className='contact-details'>
									<p>{contact.name}</p>
									<p>{contact.email}</p>
									
								</div>

								<button onClick = {() => onDeleteContact(contact)} className='contact-remove'>
									Remove							
								</button>

								
							</li>
						)
					})

					}

				</ol>
				
			</div>
			
		)
	}
}



export default ListContacts;