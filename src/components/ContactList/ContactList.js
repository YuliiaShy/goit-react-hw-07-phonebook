import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/state';

function ContactList() {
  const list = useSelector(getVisibleContacts);
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}

export default ContactList;