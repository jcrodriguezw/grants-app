import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { announcement } from '../../graphql/queries'
import { Typography, CircularProgress, Button } from '@material-ui/core'
import { useQuery } from '@apollo/client';
import './styles.css'
import Synopsis from '../Synopsis';
import AditionalInfo from '../AditionalInfo.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Dialog from './Dialog'

function DetailPage(props) {
  const {id} = props.match.params
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const {data, loading, error} = useQuery(announcement, { variables: {id }})

  const onHandleEdit = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  if(loading){
    return (
      <div className='circularProgress'>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div>
      <div style={{position:'absolute', top:'90px', left:'40px'}}>
        <Link to='/'>
          <ArrowBackIosIcon/>
        </Link>
      </div>

      <div className='detailPageInfo'>
        <Typography variant='h3'>{data && data.announcement.opportunityTitle}</Typography>
        <img src='' alt='' />
        <Typography variant='h3'>{data && data.announcement.opportunityNumber}</Typography>
        <Typography align='justify' style={{marginTop:'2em'}}>
          {data && data.announcement.description}
        </Typography>
      </div>

      <div className='detailMenu'>
        <div>
          <div className='detailMenuItem' style={{boxShadow: index === 0 && '0 3px 3px #3f51b5'}} onClick={() => setIndex(0)}>
            <Typography variant='p' style={{fontWeight:'bold'}}>General Information</Typography>
          </div>
          <div className='detailMenuItem' style={{boxShadow: index === 1 && '0 3px 3px #3f51b5'}} onClick={() => setIndex(1)}>
            <Typography variant='p' style={{fontWeight:'bold'}}>Aditional Information</Typography>
          </div>
        </div>

        <div>
          {index === 0 && <Synopsis data={data} />}
          {index === 1 && <AditionalInfo data={data}/>}

          <div style={{display:'flex', justifyContent:'center', marginTop:'2em'}}>
            <Button variant='contained' color='primary' onClick={() => onHandleEdit()}>Edit</Button>
          </div>
        </div>
      </div>

      {openModal && <Dialog data={data} id={id} openModal={openModal} handleClose={handleClose} />}
      
    </div>
  )
}

export default withRouter(DetailPage) 
