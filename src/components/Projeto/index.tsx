import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, Botao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de taferas</Paragrafo>
      <Botao>Visualizar</Botao>
    </Card>
  )
}

export default Projeto
