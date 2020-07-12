import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';

import api from '../../services/api';

export default function Mensagem () {
    const { id } = useParams();
    const [mensagem, setMensagem] = useState({id: '', texto: '', dataCriacao: '', dataAtualizacao: ''});
    const [texto, setTexto] = useState('');
    const history = useHistory();

    useEffect(() => {
        const getMensagem = async () => {
            const response = await api.get(`mensagens/${id}`);
            setMensagem(response.data);
        };
        getMensagem();
    });

    async function handleEditarMensagem(e){
        e.preventDefault();

        const mensagem = {
            texto
        }

        try {
            if (!mensagem.texto) return;
            const response = await api.put(`mensagens/${id}`, mensagem);
            if(response.status === 200){
                toast.success("Mensagem editada");
                history.push('/');
            }
        }
        catch (err) {
            toast.error("Falha ao editar mensagem");
        }
    }

    return (
        <Form onSubmit={handleEditarMensagem}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={mensagem.texto}
                    onChange={e => setTexto(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Editar
            </Button>
        </Form>
    )
}