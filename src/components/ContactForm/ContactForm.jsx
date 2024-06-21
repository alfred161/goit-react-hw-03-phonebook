import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;

    e.preventDefault();

    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    if (number.trim() === '') {
      alert('Please enter a number.');
      return;
    }

    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({
      id: nanoid(),
      name: name,
      number: number,
    });
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumberChange = e => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            id={style.name}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            value={name}
            onChange={this.handleNameChange}
            required
            autoFocus
          />
        </label>
        <label>
          <p>Number</p>
          <input
            id={style.number}
            type="tel"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleNumberChange}
            required
          />
        </label>
        <button className={style.btn}>Add Contact</button>
      </form>
    );
  }
}
