<<<<<<< HEAD
import React, { Component } from 'react'

class CreateContact extends Component {
	render() {
		return (
			<div> create contact </div>
		)
	}
}

export default CreateContact
||||||| merged common ancestors
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
	handleSubmit = (e) => {
	    e.preventDefault()
	    const values = serializeForm(e.target, { hash: true })
	    if (this.props.onCreateContact)
	      this.props.onCreateContact(values)
	  }

	render() {
		return(
			<div>
				<Link
					to='/'
					className='close-create-contact'
				>Go back</Link>
				<form onSubmit={this.handleSubmit} className='create-contact-form'>
					<ImageInput
						className='create-contact-avatar-input'
						name='avatarURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
						<input type='text' name='name' placeholder='Name'/>
						<input type='text' name='email' placeholder='Email'/>
						<button>Create contact</button>
					</div>
				</form>


			</div>
		)
	}
}

export default CreateContact
>>>>>>> 8286265f7292613417ec920c6bbf18645c98955a
