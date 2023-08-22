

function Form() {
    return (
        <form id="formulario-de-cadastro" action="">
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
                <button type="submit" className="btn btn-primary btn-lg">
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