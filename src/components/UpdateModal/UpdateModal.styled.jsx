import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Modal = styled.div`
  padding: 40px;
  background-color: white;
  border: 1px solid black;
  position: relative;
`;

export const BtnClose = styled.button`
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  & svg {
    width: 30px;
    height: 30px;
  }
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(0.9);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
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

export const BtnSubmit = styled.button`
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
