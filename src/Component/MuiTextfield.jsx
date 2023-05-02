import React, { useState } from 'react'
import { InputAdornment, Stack,TextField } from '@mui/material'
export const MuiTextfield = () => {
    const [value,setValue]=useState("");
  return (
    <Stack style={{padding:'3rem'}} spacing={4}>
        <Stack spacing={2} direction="row">
              <TextField label="name" />
              <TextField label='age' required variant='filled' disabled/>
              <TextField label='age' required variant='standard'/>


        </Stack>
        <Stack spacing={2} direction="row">
        <TextField label='Password' type="password" required variant='filled' InputProps={{readOnly :true}} />  
        <TextField label='Summary'  value={value}nrequired variant='filled' onChange={(e)=>setValue(e.target.value)}
        error={!value}
        helperText={!value?"Required":"Thanks for the feedback"}
        />  
        </Stack>
        <Stack spacing={2} direction="row">
        <TextField label='Rupees' required variant='filled' 
        InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}
        />
                <TextField label='Weigth' required variant='filled' 
        InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
        }}
        />
        </Stack>
    </Stack>
  )
}
