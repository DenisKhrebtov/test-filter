import { Wrapper, Search } from './SearchField.styled';

export const SearchField = () => {
  return (
    <Wrapper>
      <Search
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
      />
    </Wrapper>
  );
};
