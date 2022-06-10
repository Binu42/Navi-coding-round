import React from 'react'
import {Button as MuiButton} from "@mui/material"

const Button = ({size="small", label, variant="contained", ...rest}) => {
  return (
    <MuiButton
      size={size}
      variant={variant}
      {...rest}
    >
        {label}
    </MuiButton>
  )
}

export default Button