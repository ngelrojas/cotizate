import React from 'react';
import Link from '@mui/material/Link';
import { ItemFooterBody, SubBody } from "./styles";

interface itSublinks {
  sublink: string
  href: string
}

const  ColumnsFooter = ( {sublink, href}: itSublinks ) => {
  return(
          <ItemFooterBody> 
            <SubBody >
              <Link href={href} underline='none'>{sublink}</Link>
            </SubBody> 
          </ItemFooterBody>
  )
}

export default ColumnsFooter;
