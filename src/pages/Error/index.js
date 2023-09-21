import './error.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

export default function Error() {
  return (
    <div className="error">
      <Logo/>
   <h1> Pagina nao encontrada</h1>
   <p>esta pagina que esta procurando nao existe</p>

   <Link  className="link" to="/">
   Voltar para Home
   </Link>
    </div>
  )
}