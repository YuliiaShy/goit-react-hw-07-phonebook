import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/state';
import { useGetContactsQuery } from 'services/API';

function ContactList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const getContacts = () => {
    function dataSort(a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB) return 1;
      return 0;
    }
    if (filter === '') {
      return data;
    }
    return data
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .sort(dataSort);
  };

  const list = getContacts();

  return (
    <>
    {list && <List>
      {list.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
        />
      ))}
    </List>}
    </>
  );
}

export default ContactList;