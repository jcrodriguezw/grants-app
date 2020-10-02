import { gql } from '@apollo/client';

export const updateAnnouncement = gql`
mutation updateAnnouncement(
  $id: ID!,
  $categoryOfFundingActivity: String
  $opportunityNumber: String
  $grantorContactText: String
  $closeDateExplanation: String
  $cfdaNumbers: String
  $opportunityCategory: String
  $description: String
  $closeDate: String
  $estimatedTotalProgramFunding: String
  $awardCeiling: String
  $lastUpdatedDate: String
  $grantorContactEmailDescription: String
  $archiveDate: String
  $awardFloor: String
  $fundingInstrumentType: String
  $expectedNumberOfAwards: String
  $grantorContactEmail: String
  $costSharingOrMatchingRequirement: String
  $version: String
  $opportunityTitle: String
  $agencyName: String
  $eligibleApplicants: String
  $agencyCode : String
){
  updateAnnouncement(
    id: $id
    input: {
          categoryOfFundingActivity: $categoryOfFundingActivity
          opportunityNumber: $opportunityNumber
          grantorContactText: $grantorContactText
          closeDateExplanation: $closeDateExplanation
          cfdaNumbers: $cfdaNumbers
          opportunityCategory: $opportunityCategory
          description: $description
          closeDate: $closeDate
          estimatedTotalProgramFunding: $estimatedTotalProgramFunding
          awardCeiling: $awardCeiling
          lastUpdatedDate: $lastUpdatedDate
          grantorContactEmailDescription: $grantorContactEmailDescription
          archiveDate: $archiveDate
          awardFloor: $awardFloor
          fundingInstrumentType: $fundingInstrumentType
          expectedNumberOfAwards: $expectedNumberOfAwards
          grantorContactEmail: $grantorContactEmail
          costSharingOrMatchingRequirement: $costSharingOrMatchingRequirement
          version: $version
          opportunityTitle: $opportunityTitle
          agencyName: $agencyName
          eligibleApplicants: $eligibleApplicants
          agencyCode: $agencyCode
    }
  ){
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