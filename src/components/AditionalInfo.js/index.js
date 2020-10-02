import React from 'react'
import { Typography } from '@material-ui/core'
// import './styles.css'

function AditionalInfo({data}) {
  const { announcement } = data

  return (
    <div className='synopsis'>
      <div>
        <span><strong>Agency Name: </strong></span>
        <Typography gutterBottom>{announcement.agencyName}</Typography>
      </div>
      <div>
        <span><strong>Description: </strong></span>
        <Typography align='justify' gutterBottom>{announcement.description}</Typography>
      </div>

      <div>
        <span><strong>Link to Additional Information: </strong></span>
        <Typography gutterBottom>{announcement.additionalInformationURL}</Typography>
      </div>
      <div>
        <span><strong>Grantor Contact Information:	</strong></span>
        <Typography gutterBottom>{announcement.grantorContactText}</Typography>
      </div>
    </div>
  )
}

export default AditionalInfo
