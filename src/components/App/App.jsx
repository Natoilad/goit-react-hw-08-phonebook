import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/user/userThunk';
import { useEffect } from 'react';

export const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
  // const filtered = useSelector(state => state.filter);
  // const filterContact = e => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtered.toLowerCase())
  //   );
  //   return filteredContacts;
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
