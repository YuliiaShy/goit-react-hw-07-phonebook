import PropTypes from 'prop-types';
import { Items, Button, Style} from './Contact.styled';
import { useDeleteContactMutation } from 'services/API';

function Contact({ id, name, phone }) {
  const [onDelete] = useDeleteContactMutation();

  return (
    <Items>
      <p>{name}</p>
      <Style>
        <p>{phone}</p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
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