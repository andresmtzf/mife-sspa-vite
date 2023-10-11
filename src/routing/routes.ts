import React, { LazyExoticComponent, lazy } from 'react'
import { PaginaDetalleContacto } from '../features/detalle-contacto/PaginaDetalleContacto'

type JSXComponent = () => React.JSX.Element

interface Route {
  nombre: string
  path: string
  to: string
  Componente: LazyExoticComponent<JSXComponent> | JSXComponent
  children?: ChildrenRoute[]
}

interface ChildrenRoute {
  to: string
  path: string
  Componente: LazyExoticComponent<JSXComponent> | JSXComponent
}

const ContactosPagina = lazy(() => import('../features/pagina-contactos/PaginaContactos'))
export const routes: Route[] = [
  {
    nombre: 'Contactos',
    to: '/contactos',
    path: 'contactos',
    Componente: ContactosPagina,
    children: [
      {
        to: '/contactos/detalle-contacto',
        path: 'contactos/detalle-contacto',
        Componente: PaginaDetalleContacto,
      },
    ],
  },
]
