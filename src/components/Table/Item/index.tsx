import IContato from "../../../types/contato";
import Botao from "../../Botao";


interface ItemProps {
    contato: IContato;
    selecionaContato: (selecionaContato: IContato) => void;
}

function Item({ contato, selecionaContato }: ItemProps) {
    return (<>
        <td>{contato.nome}</td>
        <td>{contato.fone}</td>
        <td>
            <Botao type="button"
                className="btn btn-success btn-sm me-2"
                onClick={() => {
                    selecionaContato(contato);
                    alert(`Contato ${contato.nome} selecionado!`)
                    }}>
                <i className="fas fa-edit"></i>
            </Botao>
            <Botao type="button"
                className="btn btn-danger btn-sm">
                <i className="fas fa-trash"></i>
            </Botao>
        </td>
    </>
    );
}

export default Item;