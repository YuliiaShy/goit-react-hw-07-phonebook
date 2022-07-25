import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Forms, Label, SubmitButton } from 'components/Form/Form.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/API';

function Form () {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading, isSuccess, error }] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const [nameForToast, setNameForToast] = useState('');
 
 useEffect(() => {
   isSuccess && toast.success(` ${nameForToast} added to phone book`);
   error && toast.error('oops something went wrong');
 }, [error, isSuccess, nameForToast]);


  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    setNameForToast(name);
    if (data.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return toast.warn(`${name} is already in contacts!`);
      
      }
    addContact({ name, phone })
    
    setName('');
    setPhone('');
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
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputChange}
            required
          />
        </Label>
        <SubmitButton type="submit" disabled={phone && name ? false : true}>
          {isLoading ? 'Add Contact...' : 'Add Contact'}
        </SubmitButton>
      </Forms>
    );
  }

export default Form;
