import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Section, Form, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('erro ao cadastrar caso, tente novamente');
    }
  }

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
          <input
            placeholder="Título do caso"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit" onClick={handleNewIncident}>
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
