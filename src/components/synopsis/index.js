import React from 'react'
import { Typography } from '@material-ui/core'
// import './styles.css'


function Synopsis({data}) {
  const { announcement } = data
  return (
    <div className='synopsis'>

      <div>
        <span><strong>Document type: </strong></span>
        <Typography>Grants Notice</Typography>
      </div>
      <div>
        <span><strong>Funding Opportunity Number: </strong></span>
        <Typography>{announcement.opportunityNumber}</Typography>
      </div>
      <div>
        <span><strong>Funding Opportunity Title: </strong></span>
        <Typography>{announcement.opportunityTitle} </Typography>
      </div>
      <div>
        <span><strong>Opportunity Category: </strong></span>
        <Typography>{announcement.opportunityCategory} </Typography>
      </div>
      <div>
        <span><strong>Opportunity Category Explanation: </strong></span>
        <Typography>{announcement.opportunityCategoryExplanation}</Typography>
      </div>
      <div>
        <span><strong>Funding Instrument Type: </strong></span>
        <Typography>{announcement.fundingInstrumentType} </Typography>
      </div>
      <div>
        <span><strong>Category of Funding Activity: </strong></span>
        <Typography>{announcement.categoryOfFundingActivity}</Typography>
      </div>
      <div>
        <span><strong>Category Explanation: </strong></span>
        <Typography>{announcement.categoryExplanation}</Typography>
      </div>
      <div>
        <span><strong>Expected Number of Awards: </strong></span>
        <Typography>{announcement.expectedNumberOfAwards}</Typography>
      </div>
      <div>
        <span><strong>CFDA Number(s): </strong></span>
        <Typography>{announcement.cfdaNumbers} </Typography>
      </div>
      <div>
        <span><strong>Cost Sharing or Matching Requirement: </strong></span>
        <Typography>{announcement.costSharingOrMatchingRequirement}</Typography>
      </div>

      <div>
        <span><strong>Version: </strong></span>
        <Typography>{announcement.version}</Typography>
      </div>
      <div>
        <span><strong>Posted Date: </strong></span>
        <Typography>{announcement.postDate}</Typography>
      </div>
      <div>
        <span><strong>Last Updated Date: </strong></span>
        <Typography>{announcement.lastUpdatedDate}</Typography>
      </div>
      <div>
        <span><strong>Original Closing Date for Applications: </strong></span>
        <Typography>{announcement.closeDate} {announcement.closeDateExplanation} </Typography>
      </div>
      <div>
        <span><strong>Current Closing Date for Applications: </strong></span>
        <Typography>{announcement.closeDate} {announcement.closeDateExplanation}</Typography>
      </div>
      <div>
        <span><strong>Archive Date: </strong></span>
        <Typography>{announcement.archiveDate}</Typography>
      </div>
      <div>
        <span><strong>Estimated Total Program Funding: </strong></span>
        <Typography>{announcement.estimatedTotalProgramFunding}</Typography>
      </div>
      <div>
        <span><strong>Award Ceiling: </strong></span>
        <Typography>{announcement.awardCeiling}</Typography>
      </div>
      <div>
        <span><strong>Award Floor: </strong></span>
        <Typography>{announcement.awardFloor}</Typography>
      </div>

    </div>
  )
}

export default Synopsis


/*

D= Discretionary


{
    "categoryOfFundingActivity": [
     "ENV",{},{}],
    "opportunityNumber": "G20AS00104",
    "grantorContactText": "Desiree Santa 703-648-7382&lt;br\/&gt;dsanta@usgs.gov",
    "opportunityID": "329193",
    "closeDateExplanation": "Proposals for lidar acquisition are due by 5:00 PM ET on Friday,   November 13, 2020. The BAA will remain open and proposals   received after the initial due date will be considered for review until   June 30, 2021.",
    "cfdaNumbers": "15.817",
    "additionalInformationText": "Grants.gov",
    "opportunityCategory": "D",
    "description": "This Broad Agency Announcement (BAA) is issued to facilitate the collection of lidar and derived elevation data for the 3D Elevation Program (3DEP). The BAA continues the USGS&#191;s long standing approach to elevation data acquisition through a combination of contracting through the USGS Geospatial Products and Services Contracts (GPSC) and partner acquisitions. The BAA is meant to provide increased visibility to these existing processes for data acquisition partnerships to the broadest stakeholder community possible. Proposals are invited from applicants who wish to propose a partnership with 3DEP to fund lidar data acquisition and the creation of lidar-derived elevation products. Applicants may fund an acquisition project through the USGS Geospatial Products and Services Contract (GPSC) or they may request 3DEP funds to apply towards a lidar data acquisition project where the requesting partner uses their own contracting vehicle. Federal agencies, state and local governments, tribes, academic institutions and the private sector are eligible to submit proposals. The Government will review proposals based on the project&#191;s alignment with the evaluation criteria identified in section VI.A. of this BAA.",
    "closeDate": "06302021",
    "estimatedTotalProgramFunding": "0",
    "awardCeiling": "800000",
    "lastUpdatedDate": "09242020",
    "grantorContactEmailDescription": "USGS Grants Specialist",
    "archiveDate": "10312021",
    "awardFloor": "0",
    "fundingInstrumentType": [
     "CA",{},{}],
    "expectedNumberOfAwards": "0",
    "grantorContactEmail": "dsanta@usgs.gov",
    "additionalInformationURL": "https:www.grants.gov",
    "costSharingOrMatchingRequirement": "Yes",
    "version": "Synopsis 1",
    "opportunityTitle": "Broad Agency Announcement (BAA) for 3D Elevation Program (3DEP)",
    "postDate": "09242020",
    "agencyName": "Geological Survey",
    "eligibleApplicants": [
     "00",{},{},{},{},{},{},{},{},{},{},{},{},{}],
    "agencyCode": "DOI-USGS1"
   },


*/