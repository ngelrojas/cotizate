
interface SubMenu {
  key: string;
  title?: string;
  path: string;
}

export interface itemHome {
  key: string;
  title?: string;
  path: string;
  logo?: string;
  opt: number;
  submenu?: SubMenu[]
}

export interface itSublink {
  id: number
  label: string
  href: string
}

export interface Ilocation {
  pathname:string
}

