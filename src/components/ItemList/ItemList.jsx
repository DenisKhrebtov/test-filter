import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors';

export const ItemList = () => {
  const products = useSelector(selectProducts);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Images</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(
          ({
            id,
            title,
            description,
            price,
            images,
            rating,
            stock,
            category,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{price}</td>
              <td>
                <img src={images[0]} alt={title} />
              </td>
              <td>{rating}</td>
              <td>{stock}</td>
              <td>{category}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
