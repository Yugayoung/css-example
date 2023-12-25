import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #beaff;
  margin: lem;
  padding: 0.25em lem;
  ${(props) =>
    props.primary &&
    CSS`
background: #009c5; color: white;
`};
`;
function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container></Container>
    </>
  );
}

export default App;
