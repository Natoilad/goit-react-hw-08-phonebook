import { ContactForm } from 'components/ContactForm/ContactForm';
import css from '../components/App/App.module.css';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { filterContact } from 'redux/sliceFilter';

const { useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
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
