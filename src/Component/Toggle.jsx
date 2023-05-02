import React, { useState } from 'react'
import { ToggleButton,ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const Toggler = () => {
const [formats,setFormats]=useState(null);
console.log(formats)
const handleSubmit=(_event: React.MouseEvent<HTMLElement> ,updatedFormats: String )=>{
setFormats(updatedFormats);
}


  return (
    <ToggleButtonGroup variant="text" color='success' direction='row' size='large' style={{padding:'3rem'}} value={formats} onChange={handleSubmit} exclusive>
      <ToggleButton value='bold'><FormatBoldIcon/>
      </ToggleButton>
      <ToggleButton value='Italic'><FormatItalicIcon/>
      </ToggleButton>
      <ToggleButton value='underline'><FormatUnderlinedIcon/>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
