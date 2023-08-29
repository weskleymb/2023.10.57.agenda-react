import React from 'react';
import IContato from '../../types/contato';
import Botao from '../Botao';

interface ITableProps {
    contatos: IContato[];
    contatoSelecionado?: IContato;
}

function Table({ contatos }: ITableProps) {

    // const contatos: IContato[] = [
    //     { nome: "Maria", fone: "1111-1111" },
    //     { nome: "João", fone: "2222-2222" },
    //     { nome: "José", fone: "3333-3333" },
    //     { nome: "Ana", fone: "4444-4444" },
    //     { nome: "Carlos", fone: "5555-5555" }
    // ];

    return (
        <table id="lista-de-contatos" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Fone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map((contato, indice) => (
                    <tr key={ indice }>
                        <td>{ contato.nome }</td>
                        <td>{ contato.fone }</td>
                        <td>
                            <Botao type="button" className="btn btn-success btn-sm me-2">
                                <i className="fas fa-edit"></i>
                            </Botao>
                            <Botao type="button" className="btn btn-danger btn-sm">
                                <i className="fas fa-trash"></i>
                            </Botao>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;