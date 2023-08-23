import React from 'react';

function Form() {

    interface IFormulario {
        nome: string;
        fone: string;
    }
    // função que será executada quando o formulário for submetido
    function salvar(event: React.FormEvent<HTMLFormElement>) {
        // previne o comportamento padrão do formulário
        event.preventDefault();
        // converte o evento para um elemento do DOM
        const formulario = event.target as HTMLFormElement;
        // cria um objeto FormData a partir do formulário
        const dados = new FormData(formulario);
        // cria um contato com os dados do formulário
        const contato: IFormulario = {
            nome: dados.get('nome') as string,
            fone: dados.get('fone') as string
        };
        // imprime o contato no console
        console.log(contato);
    }

    function teste() {
        console.log('teste');
    }

    return (
        <form id="formulario-de-cadastro" onSubmit={salvar}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="nome" id="nome" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="fone" className="form-label">Fone:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                    </span>
                    <input type="tel" className="form-control" name="fone" id="fone" />
                </div>
            </div>
            <div className="mb-3">
                <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    onClick={teste}
                >
                    <i className="fas fa-floppy-disk"></i> Salvar
                </button>
                <button type="reset" className="btn btn-danger btn-lg">
                    <i className="fas fa-broom"></i> Limpar
                </button>
            </div>
        </form>
    );
}

export default Form;