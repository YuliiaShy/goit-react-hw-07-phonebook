import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/state';
import * as actions from 'redux/actions';

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = event =>
    dispatch(actions.changeFilter(event.target.value));
  
  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </Label>
  );
}

export default Filter;