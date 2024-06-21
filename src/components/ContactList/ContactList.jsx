import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({ filterContacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <ul className={style.list}>
      {filterContacts().map(contact => (
        <li key={contact.id}>
          <div className={style.contactItem}>
            {contact.name} ({contact.number})
            <button
              className={style.btn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
