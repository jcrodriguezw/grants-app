import React, { useState } from 'react'
import Table from './Table'
import { allAnnouncements } from '../../graphql/queries'
import { useQuery } from '@apollo/client';
import { TextField } from '@material-ui/core'
import './styles.css'

function HomePage() {
  const [search, setSearch] = useState('')
  const {data, loading, error} = useQuery(allAnnouncements) 

  return (
    <div>
      <div className='homeTitle'>
        <h1>Grants Directory</h1>
        <TextField 
          id="standard-search" 
          label="Search Announcement" 
          type="search" 
          variant="outlined" 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      
      <div className='table'>
        <Table
          data={data}
          loading={loading}
          error={error}
          search={search}
        />
      </div>
    </div>
  )
}

export default HomePage
