import styled from 'styled-components';

const Forms = styled.form`
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: rgb(0, 157, 255);
  font-weight: bold;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(245, 248, 40);
`;

export { Forms, Label, SubmitButton };