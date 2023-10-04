import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { restoreContacts } from 'redux/contactsSlice';

const App = () => {
  // // localStorage logics
  // const dispatch = useDispatch();
  // const storeContacts = useSelector(getContacts);

  // //  load from localStorage
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts.length > 0) {
  //     dispatch(restoreContacts(parsedContacts));
  //   }
  // }, [dispatch]);

  // //  save to localStorage
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(storeContacts));
  // }, [storeContacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
