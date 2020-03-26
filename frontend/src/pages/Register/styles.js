import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-right: 5%;
  margin-left: 5%;
  padding: 70px 20px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 30px 0;
  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  margin-right: 30px;

  input {
    width: 100%;
    margin-top: 8px;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .input-group {
    display: flex;
    input + input {
      margin-left: 8px;
    }
  }

  }
`;
