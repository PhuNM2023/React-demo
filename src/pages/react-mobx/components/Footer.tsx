import { AppBar, Toolbar, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import React from 'react'
import { counterStore } from '../store/counter.store'

const FooterMobX = observer(() => {
  return (
    <AppBar position='fixed' color='secondary' sx={{top: "auto", bottom: 0}}>
      <Toolbar className='d-flex justify-content-between'>
        <Typography variant='h4'>Footer</Typography>
        <Typography variant='caption'>
          Counter Computed: {counterStore.total}
        </Typography>
        <Typography variant='caption'>
          Counter A: {counterStore.count.numberA}
        </Typography>
        <Typography variant='caption'>
          Counter B: {counterStore.count.numberB}
        </Typography>
      </Toolbar>  
    </AppBar>
  )
})

export default FooterMobX