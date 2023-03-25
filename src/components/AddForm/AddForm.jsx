import { Formik } from 'formik';
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
  name: Yup.string()
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
    .min(1, 'Rating should be written')
    .moreThan(1, 'Rating should be more than 1')
    .lessThan(5, 'Rating can be maximum 5')
    .required('Rating is required'),
});

export const AddForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        author: '',
        year: '',
        rating: 0,
      }}
      validationSchema={AddSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledLabel>
            Product name
            <StyledField
              type="text"
              name="name"
              placeholder="For example `Iphone`"
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="name" />
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
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
          </StyledLabel>
          <ErrorInfo component="div" name="rating" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};
