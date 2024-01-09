import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const HeaderRedux = () => {
  return (
    <AppBar position='static'>
      <Toolbar className='d-flex justify-content-between'>
        <Typography variant='h4'>Redux component</Typography>
        <Typography variant='caption'>Username: -</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderRedux