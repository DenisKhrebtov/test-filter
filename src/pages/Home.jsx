import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/operation';

import { Title } from '../components/Title/Title';
import { ItemList } from '../components/ItemList/ItemList';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Title text={'Product list'} />
      <Link to={'/add-product'}>Add new product</Link>
      <ItemList />;
    </>
  );
};

export default Home;
