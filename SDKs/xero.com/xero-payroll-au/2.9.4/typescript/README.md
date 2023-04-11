# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xero.com/xero-payroll-au/2.9.4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xero.com/xero-payroll-au/2.9.4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEmployeeRequest,
  CreateEmployeeResponse
} from "openapi/dist/sdk/models/operations";
import {
  EmployeeGenderEnum,
  TFNExemptionTypeEnum,
  ResidencyStatusEnum,
  EmploymentBasisEnum,
  EmployeeStatusEnum,
  SuperannuationContributionTypeEnum,
  SuperannuationCalculationTypeEnum,
  EntitlementFinalPayPayoutTypeEnum,
  EmploymentTerminationPaymentTypeEnum,
  LeaveLineCalculationTypeEnum,
  EarningsRateCalculationTypeEnum,
  DeductionTypeCalculationTypeEnum,
  StateEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEmployeeRequest = {
  requestBody: [
    {
      bankAccounts: [
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
      ],
      classification: "99383",
      dateOfBirth: "/Date(322560000000+0000)/",
      email: "developer@me.com",
      employeeGroupName: "marketing",
      employeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
      firstName: "Karen",
      gender: EmployeeGenderEnum.F,
      homeAddress: {
        addressLine1: "123 Main St",
        addressLine2: "Apt 4",
        city: "St. Kilda",
        country: "AUSTRALIA",
        postalCode: "3182",
        region: StateEnum.Vic,
      },
      isAuthorisedToApproveLeave: false,
      isAuthorisedToApproveTimesheets: true,
      jobTitle: "Manager",
      lastName: "Jones",
      leaveBalances: [
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
      ],
      leaveLines: [
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Unknown,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Fixedamounteachperiod,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
      ],
      middleNames: "Adena",
      mobile: "415-234-5678",
      openingBalances: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Fixedamount,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Posttax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Unknown,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Nocalculationrequired,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Fixedamounteachperiod,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        openingBalanceDate: "/Date(322560000000+0000)/",
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Percentageofearnings,
            contributionType: SuperannuationContributionTypeEnum.Employee,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Salarysacrifice,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Percentageofearnings,
            contributionType: SuperannuationContributionTypeEnum.Employee,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Sgc,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
        tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      },
      ordinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
      payTemplate: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Fixedamount,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Annualsalary,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Annualsalary,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Enterrateinpaytemplate,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Salarysacrifice,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Employeradditional,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Sgc,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Employeradditional,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
      },
      payrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
      phone: "415-555-1212",
      startDate: "/Date(320284900000+0000)/",
      status: EmployeeStatusEnum.Active,
      superMemberships: [
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
      ],
      taxDeclaration: {
        approvedWithholdingVariationPercentage: 75,
        australianResidentForTaxPurposes: true,
        eligibleToReceiveLeaveLoading: false,
        employeeID: "123 Main St",
        employmentBasis: EmploymentBasisEnum.Parttime,
        hasHELPDebt: false,
        hasSFSSDebt: false,
        hasStudentStartupLoan: true,
        hasTradeSupportLoanDebt: false,
        residencyStatus: ResidencyStatusEnum.Foreignresident,
        tfnExemptionType: TFNExemptionTypeEnum.Pending,
        taxFileNumber: "123123123",
        taxFreeThresholdClaimed: false,
        taxOffsetEstimatedAmount: 100,
        upwardVariationTaxWithholdingAmount: 50,
      },
      terminationDate: "/Date(1584662400000+0000)/",
      title: "Mrs",
      twitterUserName: "xeroapi",
      validationErrors: [
        {
          message: "saepe",
        },
        {
          message: "fuga",
        },
        {
          message: "in",
        },
        {
          message: "corporis",
        },
      ],
    },
    {
      bankAccounts: [
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
      ],
      classification: "99383",
      dateOfBirth: "/Date(322560000000+0000)/",
      email: "developer@me.com",
      employeeGroupName: "marketing",
      employeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
      firstName: "Karen",
      gender: EmployeeGenderEnum.F,
      homeAddress: {
        addressLine1: "123 Main St",
        addressLine2: "Apt 4",
        city: "St. Kilda",
        country: "AUSTRALIA",
        postalCode: "3182",
        region: StateEnum.Vic,
      },
      isAuthorisedToApproveLeave: false,
      isAuthorisedToApproveTimesheets: true,
      jobTitle: "Manager",
      lastName: "Jones",
      leaveBalances: [
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
      ],
      leaveLines: [
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Unknown,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Fixedamounteachperiod,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
      ],
      middleNames: "Adena",
      mobile: "415-234-5678",
      openingBalances: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Useearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Nocalculationrequired,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        openingBalanceDate: "/Date(322560000000+0000)/",
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Employeradditional,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
        tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      },
      ordinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
      payTemplate: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Fixedamount,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Useearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Fixedamounteachperiod,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Employee,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Employee,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
      },
      payrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
      phone: "415-555-1212",
      startDate: "/Date(320284900000+0000)/",
      status: EmployeeStatusEnum.Active,
      superMemberships: [
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
      ],
      taxDeclaration: {
        approvedWithholdingVariationPercentage: 75,
        australianResidentForTaxPurposes: true,
        eligibleToReceiveLeaveLoading: false,
        employeeID: "123 Main St",
        employmentBasis: EmploymentBasisEnum.Superincomestream,
        hasHELPDebt: false,
        hasSFSSDebt: false,
        hasStudentStartupLoan: true,
        hasTradeSupportLoanDebt: false,
        residencyStatus: ResidencyStatusEnum.Australianresident,
        tfnExemptionType: TFNExemptionTypeEnum.Notquoted,
        taxFileNumber: "123123123",
        taxFreeThresholdClaimed: false,
        taxOffsetEstimatedAmount: 100,
        upwardVariationTaxWithholdingAmount: 50,
      },
      terminationDate: "/Date(1584662400000+0000)/",
      title: "Mrs",
      twitterUserName: "xeroapi",
      validationErrors: [
        {
          message: "temporibus",
        },
        {
          message: "laborum",
        },
        {
          message: "quasi",
        },
      ],
    },
    {
      bankAccounts: [
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
        {
          accountName: "James Lebron Savings",
          accountNumber: "345678",
          amount: 200,
          bsb: "122344",
          remainder: false,
          statementText: "Salary",
        },
      ],
      classification: "99383",
      dateOfBirth: "/Date(322560000000+0000)/",
      email: "developer@me.com",
      employeeGroupName: "marketing",
      employeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
      firstName: "Karen",
      gender: EmployeeGenderEnum.F,
      homeAddress: {
        addressLine1: "123 Main St",
        addressLine2: "Apt 4",
        city: "St. Kilda",
        country: "AUSTRALIA",
        postalCode: "3182",
        region: StateEnum.Vic,
      },
      isAuthorisedToApproveLeave: false,
      isAuthorisedToApproveTimesheets: true,
      jobTitle: "Manager",
      lastName: "Jones",
      leaveBalances: [
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
        {
          leaveName: "Annual Leave",
          leaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
          numberOfUnits: 81.2602,
          typeOfUnits: "Hours",
        },
      ],
      leaveLines: [
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Enterrateinpaytemplate,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Nocalculationrequired,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
        {
          annualNumberOfUnits: 2.5,
          calculationType: LeaveLineCalculationTypeEnum.Enterrateinpaytemplate,
          employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
          entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
          fullTimeNumberOfUnitsPerPeriod: 2.5,
          includeSuperannuationGuaranteeContribution: true,
          leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
          numberOfUnits: 2.5,
        },
      ],
      middleNames: "Adena",
      mobile: "415-234-5678",
      openingBalances: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Enterearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Useearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Fixedamounteachperiod,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Unknown,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Basedonordinaryearnings,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        openingBalanceDate: "/Date(322560000000+0000)/",
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Percentageofearnings,
            contributionType: SuperannuationContributionTypeEnum.Employeradditional,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Sgc,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
        tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
      },
      ordinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
      payTemplate: {
        deductionLines: [
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Pretax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Fixedamount,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Posttax,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
          {
            amount: 10,
            calculationType: DeductionTypeCalculationTypeEnum.Fixedamount,
            deductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
            numberOfUnits: 10,
            percentage: 10,
          },
        ],
        earningsLines: [
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Useearningsrate,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
          {
            amount: 38,
            annualSalary: 40000,
            calculationType: EarningsRateCalculationTypeEnum.Annualsalary,
            earningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
            fixedAmount: 2.5,
            normalNumberOfUnits: 38,
            numberOfUnits: 2.5,
            numberOfUnitsPerWeek: 38,
            ratePerUnit: 38,
          },
        ],
        leaveLines: [
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Nocalculationrequired,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.R,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Unknown,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Nocalculationrequired,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Paidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
          {
            annualNumberOfUnits: 2.5,
            calculationType: LeaveLineCalculationTypeEnum.Enterrateinpaytemplate,
            employmentTerminationPaymentType: EmploymentTerminationPaymentTypeEnum.O,
            entitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeEnum.Notpaidout,
            fullTimeNumberOfUnitsPerPeriod: 2.5,
            includeSuperannuationGuaranteeContribution: true,
            leaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
            numberOfUnits: 2.5,
          },
        ],
        reimbursementLines: [
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
          {
            amount: 10,
            description: "For the taxi",
            expenseAccount: "420",
            reimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
          },
        ],
        superLines: [
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Fixedamount,
            contributionType: SuperannuationContributionTypeEnum.Sgc,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
          {
            amount: 10,
            calculationType: SuperannuationCalculationTypeEnum.Statutory,
            contributionType: SuperannuationContributionTypeEnum.Employeradditional,
            expenseAccountCode: "478",
            liabilityAccountCode: "826",
            minimumMonthlyEarnings: 450,
            percentage: 9,
            superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
          },
        ],
      },
      payrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
      phone: "415-555-1212",
      startDate: "/Date(320284900000+0000)/",
      status: EmployeeStatusEnum.Active,
      superMemberships: [
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
        {
          employeeNumber: "1234",
          superFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
          superMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
        },
      ],
      taxDeclaration: {
        approvedWithholdingVariationPercentage: 75,
        australianResidentForTaxPurposes: true,
        eligibleToReceiveLeaveLoading: false,
        employeeID: "123 Main St",
        employmentBasis: EmploymentBasisEnum.Labourhire,
        hasHELPDebt: false,
        hasSFSSDebt: false,
        hasStudentStartupLoan: true,
        hasTradeSupportLoanDebt: false,
        residencyStatus: ResidencyStatusEnum.Australianresident,
        tfnExemptionType: TFNExemptionTypeEnum.Under18,
        taxFileNumber: "123123123",
        taxFreeThresholdClaimed: false,
        taxOffsetEstimatedAmount: 100,
        upwardVariationTaxWithholdingAmount: 50,
      },
      terminationDate: "/Date(1584662400000+0000)/",
      title: "Mrs",
      twitterUserName: "xeroapi",
      validationErrors: [
        {
          message: "non",
        },
        {
          message: "eligendi",
        },
      ],
    },
  ],
  xeroTenantId: "sint",
};

sdk.payrollAu.createEmployee(req).then((res: CreateEmployeeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### payrollAu

* `createEmployee` - Creates a payroll employee
* `createLeaveApplication` - Creates a leave application
* `createPayItem` - Creates a pay item
* `createPayRun` - Creates a pay run
* `createPayrollCalendar` - Creates a Payroll Calendar
* `createSuperfund` - Creates a superfund
* `createTimesheet` - Creates a timesheet
* `getEmployee` - Retrieves an employee's detail by unique employee id
* `getEmployees` - Searches payroll employees
* `getLeaveApplication` - Retrieves a leave application by a unique leave application id
* `getLeaveApplications` - Retrieves leave applications
* `getPayItems` - Retrieves pay items
* `getPayRun` - Retrieves a pay run by using a unique pay run id
* `getPayRuns` - Retrieves pay runs
* `getPayrollCalendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `getPayrollCalendars` - Retrieves payroll calendars
* `getPayslip` - Retrieves for a payslip by a unique payslip id
* `getSettings` - Retrieves payroll settings
* `getSuperfund` - Retrieves a superfund by using a unique superfund ID
* `getSuperfundProducts` - Retrieves superfund products
* `getSuperfunds` - Retrieves superfunds
* `getTimesheet` - Retrieves a timesheet by using a unique timesheet id
* `getTimesheets` - Retrieves timesheets
* `updateEmployee` - Updates an employee's detail
* `updateLeaveApplication` - Updates a specific leave application
* `updatePayRun` - Updates a pay run
* `updatePayslip` - Updates a payslip
* `updateSuperfund` - Updates a superfund
* `updateTimesheet` - Updates a timesheet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

