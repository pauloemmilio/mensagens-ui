import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

export default function Listagem (props) {
    const [mensagens, setMensagens] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('mensagens').then(response => {
            setMensagens(response.data);
        })
    }, []);

    const editarMensagem = (id) => {
        props.history.push({
            pathname: '/mensagem/' + id
        });
    };

    async function excluirMensagem (id) {
        try {
            const response = await api.delete('mensagens/' + id);
            if(response.status === 200){
                toast.success("Mensagem excluída");
                setMensagens(mensagens.filter(mensagem => mensagem.id !== id));
            }
        }
        catch (err) {
            toast.error("Falha ao excluir mensagem");
        }
    }

    return (
        <div className="listagem-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Texto</th>
                        <th>Data de criação</th>
                        <th>Data de atualização</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {mensagens.map(mensagem => (
                        <tr key={mensagem.id}>
                            <td>{mensagem.texto}</td>
                            <td>{mensagem.dataCriacao}</td>
                            <td>{mensagem.dataAtualizacao}</td>
                            <td>
                                <Link to={`/mensagem/${mensagem.id}`}>
                                    <Button variant="primary">Editar</Button>
                                </Link>
                                <Button variant="danger" onClick={() => excluirMensagem(mensagem.id)}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}