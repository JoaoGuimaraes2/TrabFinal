import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastrar from '../pages/Cadastrar';
import Produtos from '../pages/Produtos';
import Produto from '../pages/Produto';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/cadastrar" component={Cadastrar} />
    <Route path="/" exact component={Produtos} />
    <Route path="/produto/:id" component={Produto} />
  </Switch>
);

export default Routes;
