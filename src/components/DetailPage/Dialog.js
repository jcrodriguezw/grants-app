import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import { useMutation } from '@apollo/client';
import { updateAnnouncement } from '../../graphql/mutations'

export default function AlertDialog({data, openModal, handleClose}) {
  
const { announcement } = data

const [categoryOfFundingActivity, setCategoryOfFundingActivity] = useState(announcement.categoryOfFundingActivity)
const [opportunityNumber, setOpportunityNumber] = useState(announcement.opportunityNumber)
const [grantorContactText, setGrantorContactText] = useState(announcement.grantorContactText)
const [closeDateExplanation, setCloseDateExplanation] = useState(announcement.closeDateExplanation)
const [cfdaNumbers, setCfdaNumbers] = useState(announcement.cfdaNumbers)
const [opportunityCategory, setOpportunityCategory] = useState(announcement.opportunityCategory)
const [description, setDescription] = useState(announcement.description)
const [closeDate, setCloseDate] = useState(announcement.closeDate)
const [estimatedTotalProgramFunding, setEstimatedTotalProgramFunding] = useState(announcement.estimatedTotalProgramFunding)
const [awardCeiling, setAwardCeiling] = useState(announcement.awardCeiling)
const [lastUpdatedDate, setLastUpdatedDate] = useState(announcement.lastUpdatedDate)
const [grantorContactEmailDescription, setGrantorContactEmailDescription] = useState(announcement.grantorContactEmailDescription)
const [archiveDate, setArchiveDate] = useState(announcement.archiveDate)
const [awardFloor, setAwardFloor] = useState(announcement.awardFloor)
const [fundingInstrumentType, setFundingInstrumentType] = useState(announcement.fundingInstrumentType)
const [expectedNumberOfAwards, setExpectedNumberOfAwards] = useState(announcement.expectedNumberOfAwards)
const [grantorContactEmail, setGrantorContactEmail] = useState(announcement.grantorContactEmail)
const [costSharingOrMatchingRequirement, setCostSharingOrMatchingRequirement] = useState(announcement.costSharingOrMatchingRequirement)
const [version, setVersion] = useState(announcement.version)
const [opportunityTitle, setOpportunityTitle] = useState(announcement.opportunityTitle)
const [agencyName, setAgencyName] = useState(announcement.agencyName)
const [eligibleApplicants, setEligibleApplicants] = useState(announcement.eligibleApplicants)
const [agencyCode, setAgencyCode] = useState(announcement.agencyCode)

const [updateAnn] = useMutation(updateAnnouncement)

  const handleSubmit = () => {
    let variables = {
      id: announcement.id,
      categoryOfFundingActivity,
      opportunityNumber,
      grantorContactText,
      closeDateExplanation,
      cfdaNumbers,
      opportunityCategory,
      description,
      closeDate,
      estimatedTotalProgramFunding,
      awardCeiling,
      lastUpdatedDate,
      grantorContactEmailDescription,
      archiveDate,
      awardFloor,
      fundingInstrumentType,
      expectedNumberOfAwards,
      grantorContactEmail,
      costSharingOrMatchingRequirement,
      version,
      opportunityTitle,
      agencyName,
      eligibleApplicants,
      agencyCode
    }

    updateAnn({
      variables
    }).then(res => {
      handleClose()
      console.log('announcement updated')
    })
    
  }

  return (
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Information</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin='dense'
            label="Category Of Funding Activity"
            value={categoryOfFundingActivity || ''}
            onChange={e => setCategoryOfFundingActivity(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Opportunity Number"
            value={opportunityNumber || ''}
            onChange={e => setOpportunityNumber(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Grantor Contact Text"
            value={grantorContactText || ''}
            onChange={e => setGrantorContactText(e.target.value)}
            fullWidth
          />
         
          <TextField 
            autoFocus
            margin='dense'
            label="CloseDate Explanation"
            value={closeDateExplanation || ''}
            onChange={e => setCloseDateExplanation(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Cfda Numbers"
            value={cfdaNumbers || ''}
            onChange={e => setCfdaNumbers(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Opportunity Category"
            value={opportunityCategory || ''}
            onChange={e => setOpportunityCategory(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Description"
            value={description || ''}
            onChange={e => setDescription(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Close Date"
            value={closeDate || ''}
            onChange={e => setCloseDate(e.target.value) }
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Estimated Total Program Funding"
            value={estimatedTotalProgramFunding || ''}
            onChange={e => setEstimatedTotalProgramFunding(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Award Ceiling"
            value={awardCeiling || ''}
            onChange={e => setAwardCeiling(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Last Updated Date"
            value={lastUpdatedDate || ''}
            onChange={e => setLastUpdatedDate(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Grantor Contact Email Description"
            value={grantorContactEmailDescription || ''}
            onChange={e => setGrantorContactEmailDescription(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Archive Date"
            value={archiveDate || ''}
            onChange={e => setArchiveDate(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Award Floor"
            value={awardFloor || ''}
            onChange={e => setAwardFloor(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Funding Instrument Type"
            value={fundingInstrumentType || ''}
            onChange={e => setFundingInstrumentType(e.target.value) }
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Expected Number Of Awards"
            value={expectedNumberOfAwards || ''}
            onChange={e => setExpectedNumberOfAwards(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Grantor Contact Email"
            value={grantorContactEmail || ''}
            onChange={e => setGrantorContactEmail(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Cost Sharing Or Matching Requirement"
            value={costSharingOrMatchingRequirement || ''}
            onChange={e => setCostSharingOrMatchingRequirement(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Version"
            value={version || ''}
            onChange={e => setVersion(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Opportunity Title"
            value={opportunityTitle || ''}
            onChange={e => setOpportunityTitle(e.target.value) }
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Agency Name"
            value={agencyName || ''}
            onChange={e => setAgencyName(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Eligible Applicants"
            value={eligibleApplicants || ''}
            onChange={e => setEligibleApplicants(e.target.value)}
            fullWidth
          />
          <TextField 
            autoFocus
            margin='dense'
            label="Agency Code"
            value={agencyCode || ''}
            onChange={e => setAgencyCode(e.target.value)}
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}
