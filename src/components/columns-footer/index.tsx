import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { FooterTitle, FooterBody, SubBody } from "./styles";

interface Sublink{
  id: number;
  label: string
}

interface ListLinks {
  sublinks: Sublink[] 
}

//TODO: fixing - how to pass array in the component
// when income the sublinks is getting undefined
const ColumnsFooter = ({title}: any, {sublinks}: ListLinks) => {
  console.log(sublinks)
  return(
    <>
          <FooterTitle> <h3>{title}</h3></FooterTitle> 
          <FooterBody> 
        {
          sublinks ? sublinks.map((sublink: Sublink) => (
            <SubBody >
              <Link key={sublink.id} underline='none'>{sublink.label}</Link>
            </SubBody>)
        ):('')
        }

            {/* <SubBody> */}
            {/*   <Link underline="none">{subtitle}</Link> */}
            {/* </SubBody> */}
            {/* <SubBody> */}
            {/*   <Link underline="none">{subtitle}</Link> */}
            {/* </SubBody> */}
            {/* <SubBody> */}
            {/*   <Link underline="none">{subtitle}</Link> */}
            {/* </SubBody> */}
          </FooterBody>
      </>
  )
}

export default ColumnsFooter;
