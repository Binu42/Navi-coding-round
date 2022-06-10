import { Grid } from '@mui/material'
import React from 'react'
import AddNewProject from './component/AddNewProject'
import Projects from './component/Projects'

const Dashboard = () => {
  
  return (
    <Grid container>
      <Projects />
    </Grid>
  )
}

export default Dashboard