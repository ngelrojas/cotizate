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
  {key: 'explorar-proyectos', title: 'EXPLORAR PROYECTOS', path: '/explorar-proyectos', opt:1},
  {key: 'categorias', title: 'CATEGORIAS', path: '/categorias', opt:1},
  {key: 'home', path: '/', logo:'/assets/images/logo_cotizate.png', opt:1},
  {key: 'registrarse', title: 'REGISTRARSE', path: '/registrarse', opt: 0},
  {key: 'ingresar', title: 'INGRESAR', path: '/ingresar', opt:0},
]

export const MenuUser:Array<itemHome> = [
  {key: 'explorar-proyectos', title: 'EXPLORAR PROYECTOS', path: '/explorar-proyectos', opt:1},
  {key: 'categorias', title: 'CATEGORIAS', path: '/categorias', opt:1},
  {key: 'home', path: '/', title: 'HOME', logo:'/assets/images/logo_cotizate.png', opt:1},
  {key: 'user', title: 'USER', path: '/dashboard', opt:1, submenu: [
    {key: 'profile', title: 'PROFILE', path: '/dashboard/profile'},
    {key: 'campaings', title: 'CAMPAINGS', path: '/dashboard/campaings'},
  ]}
]
