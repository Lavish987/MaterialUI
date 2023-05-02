import * as React from 'react';
import {Stack,Button,IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MuiButton() {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction="row" >
      <Button variant="contained">Hello World</Button>
      <Button variant="text">Hello World</Button>
      <Button variant="outlined">Hello World</Button>
    </Stack>
    <Stack spacing={2} direction={'row'} >
    <Button variant="contained" startIcon={<SendIcon/>}>Hello World</Button>
    <IconButton>
      <SendIcon color='success'/>
    </IconButton>
      <Button variant="text">Hello World</Button>
      <Button variant="outlined">Hello World</Button>
    </Stack>
    </Stack>
  );
}
