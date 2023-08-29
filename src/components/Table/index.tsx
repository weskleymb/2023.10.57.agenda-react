import React from 'react';
import IContato from '../../types/contato';
import Botao from '../Botao';
import Item from './Item';

interface ITableProps {
    contatos: IContato[];
    selecionaContato: (selecionaContato: IContato) => void;
}

function Table({ contatos, selecionaContato }: ITableProps) {

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
                    <tr>
                        <Item 
                            contato={contato}
                            selecionaContato={selecionaContato} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;