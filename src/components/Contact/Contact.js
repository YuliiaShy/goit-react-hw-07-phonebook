import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Items, Button, Style } from './Contact.styled';
import { useDeleteContactMutation } from 'services/API';

function Contact({ id, name, phone }) {
  const [onDelete, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    isSuccess && toast.warn(` ${name} removed from the phone book`);
    error && toast.error('oops something went wrong');
  }, [isSuccess, name, error]);

  return (
    <Items>
      <p>{name}</p>
      <Style>
        <p>{phone}</p>
        <Button
          type="button"
          onClick={() => onDelete(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Delete...' : 'Delete'}
        </Button>
      </Style>
    </Items>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
