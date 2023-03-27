import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyProductList } from 'redux/selectors';
import { deleteProduct } from 'redux/slices/myProductSlice';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import { BiPencil } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';

import { AddForm } from 'components/AddForm/AddForm';
import { Title } from '../../components/Title/Title';
import { UpdateModal } from 'components/UpdateModal/UpdateModal';

import { StyledTable } from '../../components/ItemList/ItemList.styled';
import { Message, Button } from './AddPage.styled';

const AddPage = () => {
  const myProductList = useSelector(selectMyProductList);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const onEdit = product => {
    setInfo(product);
    setIsOpen(true);
  };

  return (
    <>
      <Title text={'Add new product'} />

      <AddForm />
      {!myProductList.length ? (
        <Message>Your product list is empty</Message>
      ) : (
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell>Author name</TableCell>
              <TableCell>Year of publication</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myProductList.map(({ id, title, rating, year, author }, index) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {author}
                </TableCell>
                <TableCell component="th" scope="row">
                  {year}
                </TableCell>
                <TableCell component="th" scope="row">
                  {rating}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    type="button"
                    onClick={() => onEdit({ id, title, rating, year, author })}
                  >
                    <BiPencil />
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    type="button"
                    onClick={() => dispatch(deleteProduct(id))}
                  >
                    <MdDeleteOutline />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      )}
      {isOpen && <UpdateModal product={info} onClose={setIsOpen} />}
    </>
  );
};

export default AddPage;
