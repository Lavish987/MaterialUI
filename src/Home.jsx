import React from 'react'
import './App.css'
import MuiButton from './Component/MuiButton'
import { MuiTypography } from './Component/MuiTypography'
import { Button, Stack} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate();
    const handleTask=()=>{
        navigate('/Task')
    }
    const handleToggle=()=>{
        navigate('/Toggle')
    }
    const handleTextfield=()=>{
        navigate('/Textfield')
    }
  return (
    <>
    <div style={{padding:'1rem'}}>
        <Stack spacing={2} direction='row'>
        <Button variant="text" endIcon={<SendIcon/>} onClick={handleTask} >View Task</Button>
        <Button variant='text' endIcon={<SendIcon/>} onClick={handleToggle}>ToggleButtonMui</Button>
        <Button variant='text' endIcon={<SendIcon/>} onClick={handleTextfield}>TextField</Button>
        </Stack>
    </div>

    <div className='App'>
    <MuiButton/>
    <MuiTypography/>

    
    </div>
    </>
  )
}
