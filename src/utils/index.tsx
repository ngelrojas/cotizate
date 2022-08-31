import ColumnsFooter from "../components/columns-footer"
import { itSublink } from '../types';

export const render_link = (sublinks: itSublink[]) => {
  return sublinks ? (sublinks.map((sublink: itSublink) =>{
      return <ColumnsFooter 
                  key={sublink.id}
                  sublink={sublink.label}
                  href={sublink.href}
              />
  })):('')
}
