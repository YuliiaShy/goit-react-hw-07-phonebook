import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/state';
import { changeFilter } from 'redux/actions';

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = event =>
    dispatch(changeFilter(event.target.value));
  
  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
}

export default Filter;