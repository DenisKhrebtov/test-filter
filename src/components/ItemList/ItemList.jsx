import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import { StyledTable } from './ItemList.styled';

export const ItemList = () => {
  const products = useSelector(selectProducts);
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Images</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Stock</TableCell>
          <TableCell>Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
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
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell component="th" scope="row">
                {description}
              </TableCell>
              <TableCell component="th" scope="row">
                {price} $
              </TableCell>
              <TableCell component="th" scope="row">
                <img
                  src={images[0]}
                  alt={title}
                  style={{ width: '300px', height: 'auto' }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {rating}
              </TableCell>
              <TableCell component="th" scope="row">
                {stock}
              </TableCell>
              <TableCell component="th" scope="row">
                {category}
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </StyledTable>
  );
};
