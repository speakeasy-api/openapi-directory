# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/xero.com/xero-payroll-au/2.9.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateEmployeeRequest{
        Security: operations.CreateEmployeeSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateEmployeeHeaders{
            XeroTenantID: "corrupti",
        },
        Request: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "James Lebron Savings",
                        AccountNumber: "345678",
                        Amount: 200,
                        Bsb: "122344",
                        Remainder: false,
                        StatementText: "Salary",
                    },
                    shared.BankAccount{
                        AccountName: "James Lebron Savings",
                        AccountNumber: "345678",
                        Amount: 200,
                        Bsb: "122344",
                        Remainder: false,
                        StatementText: "Salary",
                    },
                    shared.BankAccount{
                        AccountName: "James Lebron Savings",
                        AccountNumber: "345678",
                        Amount: 200,
                        Bsb: "122344",
                        Remainder: false,
                        StatementText: "Salary",
                    },
                },
                Classification: "99383",
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: "developer@me.com",
                EmployeeGroupName: "marketing",
                EmployeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
                FirstName: "Karen",
                Gender: "F",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: "Apt 4",
                    City: "St. Kilda",
                    Country: "AUSTRALIA",
                    PostalCode: "3182",
                    Region: "VIC",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "Manager",
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "ENTERRATEINPAYTEMPLATE",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "FIXEDAMOUNTEACHPERIOD",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                },
                MiddleNames: "Adena",
                Mobile: "415-234-5678",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    OpeningBalanceDate: "/Date(322560000000+0000)/",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                    Tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                },
                OrdinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                },
                PayrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
                Phone: "415-555-1212",
                StartDate: "/Date(320284900000+0000)/",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 75,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: false,
                    EmployeeID: "123 Main St",
                    EmploymentBasis: "LABOURHIRE",
                    HasHELPDebt: false,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "WORKINGHOLIDAYMAKER",
                    TFNExemptionType: "PENDING",
                    TaxFileNumber: "123123123",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 100,
                    UpwardVariationTaxWithholdingAmount: 50,
                },
                TerminationDate: "/Date(1584662400000+0000)/",
                Title: "Mrs",
                TwitterUserName: "xeroapi",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "excepturi",
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "James Lebron Savings",
                        AccountNumber: "345678",
                        Amount: 200,
                        Bsb: "122344",
                        Remainder: false,
                        StatementText: "Salary",
                    },
                },
                Classification: "99383",
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: "developer@me.com",
                EmployeeGroupName: "marketing",
                EmployeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
                FirstName: "Karen",
                Gender: "F",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: "Apt 4",
                    City: "St. Kilda",
                    Country: "AUSTRALIA",
                    PostalCode: "3182",
                    Region: "VIC",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "Manager",
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "BASEDONORDINARYEARNINGS",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "FIXEDAMOUNTEACHPERIOD",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                },
                MiddleNames: "Adena",
                Mobile: "415-234-5678",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    OpeningBalanceDate: "/Date(322560000000+0000)/",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "STATUTORY",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                    Tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                },
                OrdinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                },
                PayrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
                Phone: "415-555-1212",
                StartDate: "/Date(320284900000+0000)/",
                Status: "TERMINATED",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 75,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: false,
                    EmployeeID: "123 Main St",
                    EmploymentBasis: "PARTTIME",
                    HasHELPDebt: false,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TFNExemptionType: "PENSIONER",
                    TaxFileNumber: "123123123",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 100,
                    UpwardVariationTaxWithholdingAmount: 50,
                },
                TerminationDate: "/Date(1584662400000+0000)/",
                Title: "Mrs",
                TwitterUserName: "xeroapi",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "enim",
                    },
                    shared.ValidationError{
                        Message: "odit",
                    },
                    shared.ValidationError{
                        Message: "quo",
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "James Lebron Savings",
                        AccountNumber: "345678",
                        Amount: 200,
                        Bsb: "122344",
                        Remainder: false,
                        StatementText: "Salary",
                    },
                },
                Classification: "99383",
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: "developer@me.com",
                EmployeeGroupName: "marketing",
                EmployeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
                FirstName: "Karen",
                Gender: "F",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: "Apt 4",
                    City: "St. Kilda",
                    Country: "AUSTRALIA",
                    PostalCode: "3182",
                    Region: "VIC",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "Manager",
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                    shared.LeaveBalance{
                        LeaveName: "Annual Leave",
                        LeaveTypeID: "544d9292-4329-4512-bfff-a9f15236d776",
                        NumberOfUnits: 81.2602,
                        TypeOfUnits: "Hours",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "BASEDONORDINARYEARNINGS",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 2.5,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.5,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                        NumberOfUnits: 2.5,
                    },
                },
                MiddleNames: "Adena",
                Mobile: "415-234-5678",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    OpeningBalanceDate: "/Date(322560000000+0000)/",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                    Tax: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                },
                OrdinaryEarningsRateID: "5gj1e5cc-9835-40d5-bb18-09fdb118db9c",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                        shared.DeductionLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: 10,
                            Percentage: 10,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 38,
                            AnnualSalary: 40000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: 2.5,
                            NormalNumberOfUnits: 38,
                            NumberOfUnits: 2.5,
                            NumberOfUnitsPerWeek: 38,
                            RatePerUnit: 38,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 2.5,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 2.5,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "742998cb-7584-4ecf-aa88-d694f59c50f9",
                            NumberOfUnits: 2.5,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 10,
                            Description: "For the taxi",
                            ExpenseAccount: "420",
                            ReimbursementTypeID: "bd246b96-c637-4767-81cf-851ba8fa93c2",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                        shared.SuperLine{
                            Amount: 10,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "478",
                            LiabilityAccountCode: "826",
                            MinimumMonthlyEarnings: 450,
                            Percentage: 9,
                            SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                        },
                    },
                },
                PayrollCalendarID: "2ee8e5cc-9835-40d5-bb18-09fdb118db9c",
                Phone: "415-555-1212",
                StartDate: "/Date(320284900000+0000)/",
                Status: "TERMINATED",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 75,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: false,
                    EmployeeID: "123 Main St",
                    EmploymentBasis: "PARTTIME",
                    HasHELPDebt: false,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TFNExemptionType: "PENDING",
                    TaxFileNumber: "123123123",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 100,
                    UpwardVariationTaxWithholdingAmount: 50,
                },
                TerminationDate: "/Date(1584662400000+0000)/",
                Title: "Mrs",
                TwitterUserName: "xeroapi",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "quos",
                    },
                    shared.ValidationError{
                        Message: "perferendis",
                    },
                    shared.ValidationError{
                        Message: "magni",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.PayrollAu.CreateEmployee(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### PayrollAu

* `CreateEmployee` - Creates a payroll employee
* `CreateLeaveApplication` - Creates a leave application
* `CreatePayItem` - Creates a pay item
* `CreatePayRun` - Creates a pay run
* `CreatePayrollCalendar` - Creates a Payroll Calendar
* `CreateSuperfund` - Creates a superfund
* `CreateTimesheet` - Creates a timesheet
* `GetEmployee` - Retrieves an employee's detail by unique employee id
* `GetEmployees` - Searches payroll employees
* `GetLeaveApplication` - Retrieves a leave application by a unique leave application id
* `GetLeaveApplications` - Retrieves leave applications
* `GetPayItems` - Retrieves pay items
* `GetPayRun` - Retrieves a pay run by using a unique pay run id
* `GetPayRuns` - Retrieves pay runs
* `GetPayrollCalendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `GetPayrollCalendars` - Retrieves payroll calendars
* `GetPayslip` - Retrieves for a payslip by a unique payslip id
* `GetSettings` - Retrieves payroll settings
* `GetSuperfund` - Retrieves a superfund by using a unique superfund ID
* `GetSuperfundProducts` - Retrieves superfund products
* `GetSuperfunds` - Retrieves superfunds
* `GetTimesheet` - Retrieves a timesheet by using a unique timesheet id
* `GetTimesheets` - Retrieves timesheets
* `UpdateEmployee` - Updates an employee's detail
* `UpdateLeaveApplication` - Updates a specific leave application
* `UpdatePayRun` - Updates a pay run
* `UpdatePayslip` - Updates a payslip
* `UpdateSuperfund` - Updates a superfund
* `UpdateTimesheet` - Updates a timesheet
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
