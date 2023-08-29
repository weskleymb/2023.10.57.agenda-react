import Form from '../Form';
import Table from '../Table';
import { useState } from 'react';
import IContato from '../../types/contato';

function App() {

  const [contatos, setContatos] = useState<IContato[]>([]);
  const [selecionado, setSelecionado] = useState<IContato>();

  function selecionaContato(contatoSelecionado: IContato) {
    setSelecionado(contatoSelecionado);
    setContatos(contatosAnteriores => contatosAnteriores.map(contato => ({
      ...contato,
      selecionado: contato.nome === contatoSelecionado.nome ? true : false,
    })));
  }

  return (
    <div className='row'>
      <div className="col-4">
        <Form setContatos={setContatos} />
      </div>
      <div className="col-8">
        <Table contatos={contatos} selecionaContato={selecionaContato} />
      </div>
    </div>
  );
}

export default App;
