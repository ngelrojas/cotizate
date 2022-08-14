interface ItemHome {
  key: string;
  title?: string;
  path: string;
  logo?: string;
}

export const MenuHome:Array<ItemHome> = [
  {key: 'crear-proyectos', title: 'CREAR PROYECTOS', path: '/crear-proyectos'},
  {key: 'explorar-proyectos', title: 'EXPLORAR PROYECTOS', path: '/explorar-proyectos'},
  {key: 'home', path: '/', logo:'/assets/images/logo_cotizate.png'},
  {key: 'categorias', title: 'CATEGORIAS', path: '/categorias'},
  {key: 'registrarse', title: 'REGISTRARSE', path: '/registrarse'},
  {key: 'ingresar', title: 'INGRESAR', path: '/ingresar'},
]
