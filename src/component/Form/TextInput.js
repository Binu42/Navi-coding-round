import React from 'react'
import {TextField} from "@mui/material"

const TextInput = ({fullWidth = true, margin="dense", size="small", ...rest}) => {
  return (
    <TextField
        fullWidth={fullWidth}
        margin={margin}
        size={size}
        {...rest}
    />
  )
}

export default TextInput