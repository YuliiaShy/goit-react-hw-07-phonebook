import { useState } from 'react';
import { toast } from 'react-toastify';
import { Forms, Label, SubmitButton } from 'components/Form/Form.styled';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'redux/actions';
import { getContact } from 'redux/state';

function Form () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
 
  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      toast.warn(`${name} is already in contact`);
    } else
      dispatch(
        actions.addContact({
          id: nanoid(),
          name,
          number,
        })
      );
    setName('');
    setNumber('');
  };

    return (
      <Forms onSubmit={formSubmit}>
        <Label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputChange}
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <input
            id="tel"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputChange}
            required
          />
        </Label>
        <SubmitButton type="submit" disabled={number && name ? false : true}>
          Add contact
        </SubmitButton>
      </Forms>
    );
  }

export default Form;
