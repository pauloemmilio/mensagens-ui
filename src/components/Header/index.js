import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default function Header () {
    return (
        <Navbar className="bg-light justify-content-between">
            <Link className="button" to="/">Lista de mensagens</Link>
            <Link className="button" to="/novo">Nova mensagem</Link>
        </Navbar>
    )
}