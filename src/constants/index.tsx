import { itemHome, itSublink } from '../types';

export const SOCIAL_NETWORKS:Array<itSublink> = [
    {id: 1, label: 'LinkedIn', href: 'http://linkedin.com/myprofile'},
    {id: 2, label: 'Twitter', href: 'http://twitter.com/myprofile'},
    {id: 3, label: 'Facebook', href: 'http://facebook.com/myprofile'}
] 

export const CONTACTS:Array<itSublink>= [
    {id: 1, label: 'contacts', href: 'http://cotizate.com/myprofile'},
    {id: 2, label: 'FAQ', href: 'http://cotizate.com/myprofile'},
    {id: 3, label: 'terms and conditions', href: 'http://cotizate.com/myprofile'}
]

export const WEARE:Array<itSublink>  = [
    {id: 1, label: 'who we are', href: 'http://cotizate.com/myprofile'},
    {id: 2, label: 'jobs', href: 'http://cotizate.com/myprofile'},
    {id: 3, label: 'cookies', href: 'http://cotizate.com/myprofile'}
]

export const MenuHome:Array<itemHome> = [
  {key: 'crear-proyectos', title: 'CREAR PROYECTOS', path: '/crear-proyectos'},
  {key: 'explorar-proyectos', title: 'EXPLORAR PROYECTOS', path: '/explorar-proyectos'},
  {key: 'home', path: '/', logo:'/assets/images/logo_cotizate.png'},
  {key: 'categorias', title: 'CATEGORIAS', path: '/categorias'},
  {key: 'registrarse', title: 'REGISTRARSE', path: '/registrarse'},
  {key: 'ingresar', title: 'INGRESAR', path: '/ingresar'},
]
