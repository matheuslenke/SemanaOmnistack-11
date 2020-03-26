import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;

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

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2;

      svg {
        margin-right: 8px;
      }
    }

    a:hover {
      opacity: 0.8;
    }
  }
`;
