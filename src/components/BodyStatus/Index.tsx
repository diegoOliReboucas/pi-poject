import * as C from './Styled'
import clock from '../../assets/clock2.svg'

export const BodyStatus = () => {
  return(
    <C.Body>
      <C.Top>
        STATUS
      </C.Top>

      <C.Main>
        <C.firstParag><span> <img src={clock} alt="clock" /> Horas Trabalhadas</span> 116h49 | Média 07h18</C.firstParag>
        <C.abs>
          <h1>ABSENTEISMO</h1>
          <p>indice de faltas</p>
          <h2>0 <small>%</small></h2>
          <span>0% ▼<p>ultimo mês</p> </span>
        </C.abs>

        <C.hrExtras>
        <h1>HORAS EXTRAS</h1>
        <p>indice de horas</p>
        <h2>18 <small>h</small></h2>
        <span>92% ▲<p>ultimo mês</p> </span>
        </C.hrExtras>

        <C.bancoHr>
        <h1>BANCO DE HORAS</h1>
        <p>horas acumuladas</p>
        <h2>6 <small>h</small></h2>
        <span>0% ▲<p>ultimo mês</p> </span>
        </C.bancoHr>

      </C.Main>

    </C.Body>
  )
}