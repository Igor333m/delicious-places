import styled from 'styled-components';

export default () => (
  <div>
    <Title>My First Next.js Page</Title>
    <button className='button' >Press Me</button>
  </div>
);

const Title = styled.h1`
  color: red;
`;