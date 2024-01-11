import { AppBar, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../types/model'

const HeaderRedux = () => {
  const academyInfo = useSelector((state: RootState)=> state.academyReducer)
  return (
    <AppBar position='static'>
      <Toolbar className='d-flex justify-content-between'>
        <Typography variant='h4'>Redux component: {academyInfo.name}</Typography>
        <Typography variant='caption'>Username: -</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderRedux