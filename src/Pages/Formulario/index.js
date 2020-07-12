import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';

import api from '../../services/api';

export default function Formulario () {
    const [texto, setTexto] = useState('');

    const history = useHistory();

    async function handleNovaMensagem(e) {
        e.preventDefault();

        const mensagem = {
            texto
        };

        try {
            if (!mensagem.texto) return;
            const response = await api.post('mensagens', mensagem);
            if(response.status === 201){
                toast.success("Mensagem criada");
                history.push('/');
            }
        }
        catch (err) {
            toast.error("Falha ao criar mensagem");
        }
    }
    return (

        <Form onSubmit={handleNovaMensagem}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nova mensagem"
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}