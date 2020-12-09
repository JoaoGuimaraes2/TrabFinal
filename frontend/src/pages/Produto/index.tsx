import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Content, Title, Informacoes } from './styles';

interface Params {
  id: string;
}

interface Produto {
  nome: string;
  tipo: string;
  armazem_padrao: string;
  foto: string;
}

const Produto: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [produto, setProduto] = useState<Produto>();

  useEffect(() => {
    api.get(`/produtos/${params.id}`).then((response) => {
      setProduto(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Detalhes</Title>
            <p>Informações do Cliente.</p>
          </div>

          <Informacoes>
            <div>
              <img
                src={`http://localhost:3333/uploads/${produto?.foto}`}
                alt="Foto do cliente"
              />

              <h1>{produto?.nome}</h1>
              <h1>{produto?.tipo}</h1>
              <h1>{produto?.armazem_padrao}</h1>

              <div>
                <Link to="/">Voltar</Link>
              </div>
            </div>
          </Informacoes>
        </Content>
      </Container>
    </>
  );
};

export default Produto;
