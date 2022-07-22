import PropTypes from 'prop-types';
import { Items, Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import * as actions from 'redux/actions';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(actions.deleteContact(id));
  return (
    <Items>
      <p>
        {name}: {number}
      </p>
      <Button type="button" id={id} onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Items>
  );
}
  
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;