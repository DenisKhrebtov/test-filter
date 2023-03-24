import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/operation';
import { Title } from './components/Title/Title';
import { ItemList } from './components/ItemList/ItemList';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Title text={'Product list:)'} />
      <ItemList />
    </div>
  );
}
