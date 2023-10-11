import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/custom.scss'
import { Contactos } from './features/pagina-contactos/PaginaContactos'
import { routes } from './routing/routes'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={'contactos'} path={'contactos'} element={<Contactos />} />
        {routes.map(({ children }) => {
          return (
            <>
              {children?.map((props) => (
                <Route key={props.path} path={props.path} element={<props.Componente />} />
              ))}
            </>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}
