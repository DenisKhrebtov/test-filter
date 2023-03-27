import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/operation';

import RingLoader from 'react-spinners/RingLoader';

import { Title } from '../components/Title/Title';
import { ItemList } from '../components/ItemList/ItemList';
import { SearchField } from 'components/SearchField/SearchField';
import { selectIsLoading } from 'redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Title text={'Product list'} />
      <SearchField />
      {isLoading ? <RingLoader /> : <ItemList />};
    </>
  );
};

export default Home;
