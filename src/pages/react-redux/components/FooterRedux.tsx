import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CounterState, RootState } from '../types/model';

const FooterRedux = () => {
  const counterState = useSelector((state: RootState) => state.counterReducer);
  return (
    <AppBar position='fixed'
    sx={{top: "auto", bottom: 0}}>
      <Toolbar className='d-flex justify-content-between'>
        <Typography variant='h4'>Footer</Typography>
        <Typography variant='caption'>Counter Action:{counterState.numberClick}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default FooterRedux