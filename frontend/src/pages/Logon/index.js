import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be the hero" />{' '}
        <form action="">
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </a>
        </form>
      </Form>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
