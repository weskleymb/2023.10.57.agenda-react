import React, { useState } from 'react';
import Botao from '../Botao';
import IContato from '../../types/contato';

interface IFormularioProps {
    setContatos: React.Dispatch<React.SetStateAction<IContato[]>>;
}

function Form({ setContatos }: IFormularioProps) {

    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");

    function adicionarContato(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setContatos((contatos) => [...contatos, { nome, fone }]
        );
        setNome("");
        setFone("");
        const formulario = evento.target as HTMLFormElement;
        document.getElementById("nome")?.focus();
        formulario.reset();
    }

    return (
        <form id="formulario-de-cadastro" onSubmit={adicionarContato}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-user"></i>
                    </span>
                    <input type="text" 
                        className="form-control" 
                        name="nome" 
                        id="nome"
                        onChange={evento => setNome(evento.target.value)} />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="fone" className="form-label">Fone:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                    </span>
                    <input type="tel" 
                        className="form-control" 
                        name="fone" 
                        id="fone" 
                        onChange={evento => setFone(evento.target.value)}/>
                </div>
            </div>
            <div className="mb-3">
                <Botao type="submit" 
                    className="btn btn-primary btn-lg me-2">
                    <i className="fas fa-floppy-disk"></i> Salvar
                </Botao>
                <Botao type="reset" 
                    className="btn btn-danger btn-lg">
                    <i className="fas fa-broom"></i> Limpar
                </Botao>
            </div>
        </form>
    );
}

export default Form;