import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  font-size: 30px;
  font-weight: 500;
  font-family: inherit;
  padding-left: 15px;
  height: 50px;
  width: 400px;
  &::placeholder {
    font-size: 18px;
  }
`;

export const ErrorInfo = styled(ErrorMessage)`
  color: red;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 25px;
  margin-top: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
  background-color: #ecf2ff;
  border: none;
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
