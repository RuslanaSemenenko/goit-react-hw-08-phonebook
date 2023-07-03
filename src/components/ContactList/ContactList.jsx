import { ContactsList } from './ContactList.module.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, selectContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { filter } = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactsList>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ContactsList>
    </div>
  );
};

export default ContactList;
