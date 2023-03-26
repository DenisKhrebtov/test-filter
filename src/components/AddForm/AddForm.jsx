import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/slices/myProductSlice';

import * as Yup from 'yup';

import {
  StyledForm,
  StyledLabel,
  StyledField,
  ErrorInfo,
  SubmitButton,
} from './AddForm.styled';

const currentYear = new Date().getFullYear();

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Author is required'),
  year: Yup.number()
    .integer('Year must be an integer')
    .min(1900, 'Year cannot be earlier than 1900')
    .max(currentYear, `Year cannot be later than ${currentYear}`)
    .required('Year is required'),
  rating: Yup.number()
    .min(0, 'Rating should be written')
    .moreThan(0, 'Rating should be more than 0')
    .lessThan(5, 'Rating can be maximum 5')
    .required('Rating is required'),
});

export const AddForm = () => {
  const dispatch = useDispatch();

  const onSubmit = value => {
    const normalizeRating = +value.rating.toFixed(2);
    dispatch(addProduct({ ...value, rating: normalizeRating }));
  };

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        year: '',
        rating: 0,
      }}
      validationSchema={AddSchema}
      onSubmit={values => {
        // same shape as initial values
        onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledLabel>
            Product name
            <StyledField
              type="text"
              name="title"
              placeholder="For example `Iphone`"
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="title" />
          <StyledLabel>
            Author name
            <StyledField
              type="text"
              name="author"
              placeholder="For example `Elon Musk`"
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="author" />
          <StyledLabel>
            Year of publication
            <StyledField
              type="text"
              name="year"
              placeholder="For example `1992`"
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="year" />
          <StyledLabel>
            Rating
            <StyledField
              type="number"
              name="rating"
              max="5"
              placeholder="For example `1.24`"
              //   onBlur={handleBlur}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="rating" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};
