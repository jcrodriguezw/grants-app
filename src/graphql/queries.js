import { gql } from '@apollo/client';

export const allAnnouncements = gql`
  query allAnnouncements {
    announcements{
      id
      opportunityNumber
      opportunityTitle
      agencyCode
      postDate
      closeDate
    }
  }
`

export const announcement = gql`
  query announcement($id: ID!){
    announcement(id: $id){
      id
      categoryOfFundingActivity
      opportunityNumber
      grantorContactText
      opportunityID
      closeDateExplanation
      cfdaNumbers
      opportunityCategory
      description
      closeDate
      estimatedTotalProgramFunding
      awardCeiling
      lastUpdatedDate
      grantorContactEmailDescription
      archiveDate
      awardFloor
      fundingInstrumentType
      expectedNumberOfAwards
      grantorContactEmail
      costSharingOrMatchingRequirement
      version
      opportunityTitle
      postDate
      agencyName
      eligibleApplicants
      agencyCode
    }
  }
`