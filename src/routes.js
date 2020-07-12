import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Listagem from './Pages/Listagem';
import Formulario from './Pages/Formulario';
import Mensagem from './Pages/Mensagem';

export default function Routes () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Listagem} />
                <Route path="/novo" component={Formulario} />
                <Route path="/mensagem/:id" component={Mensagem} />
            </Switch>
        </BrowserRouter>
    )
}