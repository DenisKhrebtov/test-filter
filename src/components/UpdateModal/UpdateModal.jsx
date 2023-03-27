import { useState } from 'react';
import { GiTireIronCross } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { updateProduct } from 'redux/slices/myProductSlice';

import {
  Backdrop,
  Modal,
  BtnClose,
  Form,
  Label,
  Input,
  BtnSubmit,
} from './UpdateModal.styled';

export const UpdateModal = ({ product, onClose }) => {
  const [productToUpdate, setProductToUpdate] = useState(product);
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    if (
      productToUpdate.title === product.title &&
      productToUpdate.author === product.author &&
      productToUpdate.year === product.year &&
      productToUpdate.rating === product.rating
    ) {
      return;
    }
    dispatch(updateProduct(productToUpdate));
    onClose(false);
  };

  return (
    <Backdrop>
      <Modal>
        <BtnClose type="button" onClick={() => onClose(false)}>
          <GiTireIronCross />
        </BtnClose>
        <Form onSubmit={onSubmit}>
          <Label>
            Product name
            <Input
              type="text"
              value={productToUpdate.title}
              onChange={e => {
                let value = e.currentTarget.value;
                setProductToUpdate(prevState => ({
                  ...prevState,
                  title: value,
                }));
              }}
              name="title"
            />
          </Label>
          <Label>
            Author name
            <Input
              type="text"
              value={productToUpdate.author}
              onChange={e => {
                let value = e.currentTarget.value;
                setProductToUpdate(prevState => ({
                  ...prevState,
                  author: value,
                }));
              }}
              name="author"
            />
          </Label>
          <Label>
            Year of publication
            <Input
              type="number"
              value={productToUpdate.year}
              onChange={e => {
                let value = e.currentTarget.value;
                setProductToUpdate(prevState => ({
                  ...prevState,
                  year: value,
                }));
              }}
              name="year"
            />
          </Label>
          <Label>
            Rating
            <Input
              type="number"
              value={productToUpdate.rating}
              onChange={e => {
                let value = e.currentTarget.value;
                setProductToUpdate(prevState => ({
                  ...prevState,
                  rating: value,
                }));
              }}
              name="rating"
            />
          </Label>
          <BtnSubmit type="submit">Submit</BtnSubmit>
        </Form>
      </Modal>
    </Backdrop>
  );
};
