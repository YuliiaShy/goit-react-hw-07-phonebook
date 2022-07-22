import styled from 'styled-components';


const Items = styled.li`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
width: max-content;
height: max-content;
margin:  16px 0 16px 0;
cursor: pointer;
    border-radius: 4px;
    border: 1px solid  rgb(150, 150, 141);
    color: #000;
    background-color: rgb(245, 248, 40);
  &:hover,
  &:focus {
    background-color: rgb(247, 19, 19);
  }
`;

export { Items,  Button };
