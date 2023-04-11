import { ContactForm } from 'components/ContactForm/ContactForm';
import css from '../components/App/App.module.css';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const filtered = useSelector(state => state.filter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;
