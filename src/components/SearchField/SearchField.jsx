import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { getFilteredProducts } from 'redux/slices/filterSlice';

import { Wrapper, Search } from './SearchField.styled';

export const SearchField = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.trim();
    dispatch(getFilteredProducts(value.toLowerCase()));
  };

  return (
    <Wrapper>
      <Search
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
        value={filter}
        onChange={onChange}
      />
    </Wrapper>
  );
};
