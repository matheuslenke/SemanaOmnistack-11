import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Section, Form, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para Home
          </Link>
        </Section>

        <Form>
          <input placeholder="Título do caso" />
          <textarea t placeholder="Descrição" />
          <input placeholder="Valor em Reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
