import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin-left: 5%;
  margin-right: 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 100%;
    height: auto;
    max-width: 500px;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
