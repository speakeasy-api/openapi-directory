# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            XeroTenantID: "libero",
        },
        Request: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "quis",
                        AccountNumber: "ullam",
                        Amount: 75.099998,
                        BSB: "dolor",
                        Remainder: false,
                        StatementText: "cum",
                    },
                    shared.BankAccount{
                        AccountName: "nulla",
                        AccountNumber: "repellendus",
                        Amount: 51.200001,
                        BSB: "sunt",
                        Remainder: true,
                        StatementText: "voluptates",
                    },
                },
                Classification: "error",
                DateOfBirth: "beatae",
                Email: "corrupti",
                EmployeeGroupName: "et",
                EmployeeID: "et",
                FirstName: "reiciendis",
                Gender: "M",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "officiis",
                    AddressLine2: "sint",
                    City: "aliquid",
                    Country: "aliquam",
                    PostalCode: "ipsam",
                    Region: "NSW",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "iste",
                LastName: "voluptate",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "ut",
                        LeaveTypeID: "ipsum",
                        NumberOfUnits: 43.200001,
                        TypeOfUnits: "ea",
                    },
                    shared.LeaveBalance{
                        LeaveName: "fuga",
                        LeaveTypeID: "ab",
                        NumberOfUnits: 34.099998,
                        TypeOfUnits: "doloremque",
                    },
                    shared.LeaveBalance{
                        LeaveName: "ut",
                        LeaveTypeID: "inventore",
                        NumberOfUnits: 45.200001,
                        TypeOfUnits: "voluptas",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 40.099998,
                        CalculationType: "ENTERRATEINPAYTEMPLATE",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 28.200001,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "expedita",
                        NumberOfUnits: 20.200001,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 71.199997,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 17.200001,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "incidunt",
                        NumberOfUnits: 50.200001,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 55.200001,
                        CalculationType: "FIXEDAMOUNTEACHPERIOD",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 2.200000,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "totam",
                        NumberOfUnits: 57.099998,
                    },
                },
                MiddleNames: "vel",
                Mobile: "quo",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 67.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "eos",
                            NumberOfUnits: 19.100000,
                            Percentage: 99.099998,
                        },
                        shared.DeductionLine{
                            Amount: 93.199997,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "cum",
                            NumberOfUnits: 10.200000,
                            Percentage: 87.199997,
                        },
                        shared.DeductionLine{
                            Amount: 11.100000,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "veniam",
                            NumberOfUnits: 51.200001,
                            Percentage: 12.200000,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 72.099998,
                            AnnualSalary: 71.199997,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "velit",
                            FixedAmount: 75.199997,
                            NormalNumberOfUnits: 44.200001,
                            NumberOfUnits: 77.099998,
                            NumberOfUnitsPerWeek: 75.199997,
                            RatePerUnit: 58.200001,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 27.200001,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 88.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "voluptatem",
                            NumberOfUnits: 37.099998,
                        },
                    },
                    OpeningBalanceDate: "nihil",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 12.200000,
                            Description: "pariatur",
                            ExpenseAccount: "voluptatem",
                            ReimbursementTypeID: "quasi",
                        },
                        shared.ReimbursementLine{
                            Amount: 20.200001,
                            Description: "beatae",
                            ExpenseAccount: "iste",
                            ReimbursementTypeID: "et",
                        },
                        shared.ReimbursementLine{
                            Amount: 38.099998,
                            Description: "tempora",
                            ExpenseAccount: "excepturi",
                            ReimbursementTypeID: "soluta",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 77.099998,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "qui",
                            LiabilityAccountCode: "possimus",
                            MinimumMonthlyEarnings: 25.100000,
                            Percentage: 65.099998,
                            SuperMembershipID: "quasi",
                        },
                        shared.SuperLine{
                            Amount: 11.100000,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "non",
                            LiabilityAccountCode: "ducimus",
                            MinimumMonthlyEarnings: 87.099998,
                            Percentage: 64.199997,
                            SuperMembershipID: "accusamus",
                        },
                    },
                    Tax: "qui",
                },
                OrdinaryEarningsRateID: "velit",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 68.099998,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "maiores",
                            NumberOfUnits: 64.199997,
                            Percentage: 47.200001,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 73.099998,
                            AnnualSalary: 28.200001,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "corrupti",
                            FixedAmount: 15.200000,
                            NormalNumberOfUnits: 66.199997,
                            NumberOfUnits: 6.200000,
                            NumberOfUnitsPerWeek: 25.200001,
                            RatePerUnit: 53.099998,
                        },
                        shared.EarningsLine{
                            Amount: 33.200001,
                            AnnualSalary: 10.200000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "enim",
                            FixedAmount: 58.099998,
                            NormalNumberOfUnits: 5.100000,
                            NumberOfUnits: 55.099998,
                            NumberOfUnitsPerWeek: 16.200001,
                            RatePerUnit: 5.100000,
                        },
                        shared.EarningsLine{
                            Amount: 12.100000,
                            AnnualSalary: 2.200000,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "et",
                            FixedAmount: 99.099998,
                            NormalNumberOfUnits: 15.100000,
                            NumberOfUnits: 83.099998,
                            NumberOfUnitsPerWeek: 86.099998,
                            RatePerUnit: 23.100000,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 9.100000,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 92.099998,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "animi",
                            NumberOfUnits: 25.200001,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 92.199997,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 84.099998,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "iure",
                            NumberOfUnits: 73.199997,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 46.099998,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 79.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "consequatur",
                            NumberOfUnits: 48.099998,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 38.099998,
                            Description: "alias",
                            ExpenseAccount: "ex",
                            ReimbursementTypeID: "iste",
                        },
                        shared.ReimbursementLine{
                            Amount: 20.200001,
                            Description: "et",
                            ExpenseAccount: "illum",
                            ReimbursementTypeID: "aut",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 47.200001,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "quis",
                            LiabilityAccountCode: "ut",
                            MinimumMonthlyEarnings: 82.199997,
                            Percentage: 49.200001,
                            SuperMembershipID: "totam",
                        },
                        shared.SuperLine{
                            Amount: 91.199997,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "vitae",
                            LiabilityAccountCode: "ea",
                            MinimumMonthlyEarnings: 44.200001,
                            Percentage: 96.099998,
                            SuperMembershipID: "tenetur",
                        },
                    },
                },
                PayrollCalendarID: "sit",
                Phone: "iusto",
                StartDate: "totam",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "illo",
                        SuperFundID: "repudiandae",
                        SuperMembershipID: "sit",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "magnam",
                        SuperFundID: "debitis",
                        SuperMembershipID: "maiores",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "maiores",
                        SuperFundID: "provident",
                        SuperMembershipID: "ipsa",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 78.099998,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: false,
                    EmployeeID: "quis",
                    EmploymentBasis: "PARTTIME",
                    HasHELPDebt: false,
                    HasSFSSDebt: true,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TFNExemptionType: "NOTQUOTED",
                    TaxFileNumber: "quae",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 36.200001,
                    UpwardVariationTaxWithholdingAmount: 54.200001,
                },
                TerminationDate: "similique",
                Title: "laborum",
                TwitterUserName: "beatae",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "ad",
                    },
                    shared.ValidationError{
                        Message: "maxime",
                    },
                    shared.ValidationError{
                        Message: "quia",
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "aut",
                        AccountNumber: "neque",
                        Amount: 7.200000,
                        BSB: "itaque",
                        Remainder: true,
                        StatementText: "vel",
                    },
                    shared.BankAccount{
                        AccountName: "rerum",
                        AccountNumber: "amet",
                        Amount: 13.200000,
                        BSB: "vel",
                        Remainder: false,
                        StatementText: "est",
                    },
                },
                Classification: "dolores",
                DateOfBirth: "sequi",
                Email: "porro",
                EmployeeGroupName: "facilis",
                EmployeeID: "debitis",
                FirstName: "ducimus",
                Gender: "M",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "et",
                    AddressLine2: "sed",
                    City: "ut",
                    Country: "sit",
                    PostalCode: "id",
                    Region: "NT",
                },
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "iure",
                LastName: "dolores",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "dolorum",
                        LeaveTypeID: "voluptatum",
                        NumberOfUnits: 77.099998,
                        TypeOfUnits: "consequuntur",
                    },
                    shared.LeaveBalance{
                        LeaveName: "repudiandae",
                        LeaveTypeID: "eligendi",
                        NumberOfUnits: 42.200001,
                        TypeOfUnits: "quia",
                    },
                    shared.LeaveBalance{
                        LeaveName: "repellat",
                        LeaveTypeID: "exercitationem",
                        NumberOfUnits: 8.100000,
                        TypeOfUnits: "voluptas",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 22.100000,
                        CalculationType: "ENTERRATEINPAYTEMPLATE",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 70.199997,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "adipisci",
                        NumberOfUnits: 83.199997,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 75.099998,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 53.200001,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "quo",
                        NumberOfUnits: 75.199997,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 59.099998,
                        CalculationType: "ENTERRATEINPAYTEMPLATE",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 69.099998,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "alias",
                        NumberOfUnits: 91.199997,
                    },
                },
                MiddleNames: "aut",
                Mobile: "accusamus",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 93.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "quia",
                            NumberOfUnits: 68.199997,
                            Percentage: 24.100000,
                        },
                        shared.DeductionLine{
                            Amount: 59.099998,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "possimus",
                            NumberOfUnits: 73.099998,
                            Percentage: 32.099998,
                        },
                        shared.DeductionLine{
                            Amount: 31.200001,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "molestiae",
                            NumberOfUnits: 82.099998,
                            Percentage: 20.200001,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 97.199997,
                            AnnualSalary: 47.200001,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "est",
                            FixedAmount: 77.099998,
                            NormalNumberOfUnits: 69.199997,
                            NumberOfUnits: 65.099998,
                            NumberOfUnitsPerWeek: 72.199997,
                            RatePerUnit: 80.099998,
                        },
                        shared.EarningsLine{
                            Amount: 97.099998,
                            AnnualSalary: 98.099998,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "qui",
                            FixedAmount: 47.099998,
                            NormalNumberOfUnits: 66.099998,
                            NumberOfUnits: 94.099998,
                            NumberOfUnitsPerWeek: 40.200001,
                            RatePerUnit: 20.100000,
                        },
                        shared.EarningsLine{
                            Amount: 12.100000,
                            AnnualSalary: 39.099998,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "quo",
                            FixedAmount: 38.099998,
                            NormalNumberOfUnits: 59.200001,
                            NumberOfUnits: 2.200000,
                            NumberOfUnitsPerWeek: 46.200001,
                            RatePerUnit: 71.199997,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 95.199997,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 93.199997,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "sed",
                            NumberOfUnits: 17.100000,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 85.199997,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 96.199997,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "perspiciatis",
                            NumberOfUnits: 59.099998,
                        },
                    },
                    OpeningBalanceDate: "dolores",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 82.199997,
                            Description: "officia",
                            ExpenseAccount: "autem",
                            ReimbursementTypeID: "autem",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 51.200001,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "libero",
                            LiabilityAccountCode: "sit",
                            MinimumMonthlyEarnings: 12.100000,
                            Percentage: 29.200001,
                            SuperMembershipID: "alias",
                        },
                        shared.SuperLine{
                            Amount: 3.100000,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "saepe",
                            LiabilityAccountCode: "et",
                            MinimumMonthlyEarnings: 0.200000,
                            Percentage: 71.099998,
                            SuperMembershipID: "qui",
                        },
                        shared.SuperLine{
                            Amount: 64.199997,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "animi",
                            LiabilityAccountCode: "non",
                            MinimumMonthlyEarnings: 43.099998,
                            Percentage: 83.199997,
                            SuperMembershipID: "maiores",
                        },
                    },
                    Tax: "ea",
                },
                OrdinaryEarningsRateID: "dignissimos",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 38.099998,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "in",
                            NumberOfUnits: 72.099998,
                            Percentage: 17.200001,
                        },
                        shared.DeductionLine{
                            Amount: 21.100000,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "sequi",
                            NumberOfUnits: 80.199997,
                            Percentage: 71.099998,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 50.099998,
                            AnnualSalary: 61.200001,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "natus",
                            FixedAmount: 86.199997,
                            NormalNumberOfUnits: 33.099998,
                            NumberOfUnits: 35.099998,
                            NumberOfUnitsPerWeek: 23.200001,
                            RatePerUnit: 21.200001,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 37.200001,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 1.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "et",
                            NumberOfUnits: 73.199997,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 4.200000,
                            Description: "nemo",
                            ExpenseAccount: "animi",
                            ReimbursementTypeID: "sed",
                        },
                        shared.ReimbursementLine{
                            Amount: 27.100000,
                            Description: "asperiores",
                            ExpenseAccount: "dolorem",
                            ReimbursementTypeID: "eum",
                        },
                        shared.ReimbursementLine{
                            Amount: 0.200000,
                            Description: "consequatur",
                            ExpenseAccount: "in",
                            ReimbursementTypeID: "sit",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 18.100000,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "deleniti",
                            LiabilityAccountCode: "placeat",
                            MinimumMonthlyEarnings: 78.199997,
                            Percentage: 23.200001,
                            SuperMembershipID: "aut",
                        },
                    },
                },
                PayrollCalendarID: "quasi",
                Phone: "officiis",
                StartDate: "dolorem",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "magnam",
                        SuperFundID: "itaque",
                        SuperMembershipID: "sapiente",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "vel",
                        SuperFundID: "est",
                        SuperMembershipID: "commodi",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "est",
                        SuperFundID: "in",
                        SuperMembershipID: "quod",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 99.099998,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: true,
                    EmployeeID: "dolore",
                    EmploymentBasis: "LABOURHIRE",
                    HasHELPDebt: false,
                    HasSFSSDebt: true,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: true,
                    ResidencyStatus: "FOREIGNRESIDENT",
                    TFNExemptionType: "NOTQUOTED",
                    TaxFileNumber: "earum",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 39.200001,
                    UpwardVariationTaxWithholdingAmount: 31.200001,
                },
                TerminationDate: "nam",
                Title: "et",
                TwitterUserName: "neque",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "sed",
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "reprehenderit",
                        AccountNumber: "temporibus",
                        Amount: 8.200000,
                        BSB: "incidunt",
                        Remainder: true,
                        StatementText: "velit",
                    },
                    shared.BankAccount{
                        AccountName: "eveniet",
                        AccountNumber: "quam",
                        Amount: 81.199997,
                        BSB: "modi",
                        Remainder: false,
                        StatementText: "qui",
                    },
                },
                Classification: "tempore",
                DateOfBirth: "sint",
                Email: "libero",
                EmployeeGroupName: "esse",
                EmployeeID: "voluptatem",
                FirstName: "cupiditate",
                Gender: "M",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "pariatur",
                    AddressLine2: "omnis",
                    City: "sit",
                    Country: "voluptatem",
                    PostalCode: "corporis",
                    Region: "VIC",
                },
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: false,
                JobTitle: "voluptates",
                LastName: "dolores",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "iure",
                        LeaveTypeID: "voluptas",
                        NumberOfUnits: 89.099998,
                        TypeOfUnits: "aut",
                    },
                    shared.LeaveBalance{
                        LeaveName: "doloribus",
                        LeaveTypeID: "id",
                        NumberOfUnits: 6.200000,
                        TypeOfUnits: "consectetur",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 51.099998,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 5.100000,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "repudiandae",
                        NumberOfUnits: 25.200001,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 37.200001,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 89.099998,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "corrupti",
                        NumberOfUnits: 73.199997,
                    },
                },
                MiddleNames: "error",
                Mobile: "vitae",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 3.200000,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "assumenda",
                            NumberOfUnits: 60.099998,
                            Percentage: 45.200001,
                        },
                        shared.DeductionLine{
                            Amount: 76.199997,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "aperiam",
                            NumberOfUnits: 56.200001,
                            Percentage: 51.200001,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 63.099998,
                            AnnualSalary: 83.199997,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "sed",
                            FixedAmount: 45.200001,
                            NormalNumberOfUnits: 82.199997,
                            NumberOfUnits: 90.099998,
                            NumberOfUnitsPerWeek: 49.200001,
                            RatePerUnit: 19.100000,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 6.100000,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 54.200001,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "iusto",
                            NumberOfUnits: 58.200001,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 20.200001,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 17.100000,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "doloribus",
                            NumberOfUnits: 58.099998,
                        },
                    },
                    OpeningBalanceDate: "ducimus",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 58.099998,
                            Description: "rerum",
                            ExpenseAccount: "est",
                            ReimbursementTypeID: "possimus",
                        },
                        shared.ReimbursementLine{
                            Amount: 45.099998,
                            Description: "non",
                            ExpenseAccount: "deserunt",
                            ReimbursementTypeID: "laudantium",
                        },
                        shared.ReimbursementLine{
                            Amount: 74.099998,
                            Description: "aut",
                            ExpenseAccount: "est",
                            ReimbursementTypeID: "voluptatem",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 33.099998,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "occaecati",
                            LiabilityAccountCode: "sint",
                            MinimumMonthlyEarnings: 76.099998,
                            Percentage: 2.200000,
                            SuperMembershipID: "aut",
                        },
                        shared.SuperLine{
                            Amount: 71.199997,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "eos",
                            LiabilityAccountCode: "molestias",
                            MinimumMonthlyEarnings: 60.099998,
                            Percentage: 42.099998,
                            SuperMembershipID: "quae",
                        },
                        shared.SuperLine{
                            Amount: 3.200000,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "enim",
                            LiabilityAccountCode: "delectus",
                            MinimumMonthlyEarnings: 14.200000,
                            Percentage: 30.200001,
                            SuperMembershipID: "consequuntur",
                        },
                    },
                    Tax: "praesentium",
                },
                OrdinaryEarningsRateID: "eveniet",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 67.099998,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "excepturi",
                            NumberOfUnits: 68.099998,
                            Percentage: 85.099998,
                        },
                        shared.DeductionLine{
                            Amount: 36.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "nesciunt",
                            NumberOfUnits: 42.200001,
                            Percentage: 25.200001,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 23.100000,
                            AnnualSalary: 23.100000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "autem",
                            FixedAmount: 60.200001,
                            NormalNumberOfUnits: 7.100000,
                            NumberOfUnits: 91.099998,
                            NumberOfUnitsPerWeek: 87.099998,
                            RatePerUnit: 17.100000,
                        },
                        shared.EarningsLine{
                            Amount: 15.100000,
                            AnnualSalary: 95.199997,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "dolore",
                            FixedAmount: 22.200001,
                            NormalNumberOfUnits: 60.200001,
                            NumberOfUnits: 93.099998,
                            NumberOfUnitsPerWeek: 9.100000,
                            RatePerUnit: 70.099998,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 90.099998,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 83.199997,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "doloremque",
                            NumberOfUnits: 66.199997,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 60.200001,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 67.199997,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "voluptatum",
                            NumberOfUnits: 5.200000,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 22.100000,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 14.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "sunt",
                            NumberOfUnits: 37.099998,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 90.099998,
                            Description: "vel",
                            ExpenseAccount: "ea",
                            ReimbursementTypeID: "earum",
                        },
                        shared.ReimbursementLine{
                            Amount: 98.199997,
                            Description: "eos",
                            ExpenseAccount: "et",
                            ReimbursementTypeID: "repudiandae",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 13.100000,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "architecto",
                            LiabilityAccountCode: "facere",
                            MinimumMonthlyEarnings: 75.199997,
                            Percentage: 50.099998,
                            SuperMembershipID: "maxime",
                        },
                        shared.SuperLine{
                            Amount: 59.099998,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "nihil",
                            LiabilityAccountCode: "non",
                            MinimumMonthlyEarnings: 18.100000,
                            Percentage: 17.100000,
                            SuperMembershipID: "voluptatem",
                        },
                    },
                },
                PayrollCalendarID: "nobis",
                Phone: "et",
                StartDate: "itaque",
                Status: "TERMINATED",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "necessitatibus",
                        SuperFundID: "adipisci",
                        SuperMembershipID: "labore",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "aperiam",
                        SuperFundID: "unde",
                        SuperMembershipID: "sunt",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 3.200000,
                    AustralianResidentForTaxPurposes: false,
                    EligibleToReceiveLeaveLoading: true,
                    EmployeeID: "libero",
                    EmploymentBasis: "PARTTIME",
                    HasHELPDebt: true,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: false,
                    HasTradeSupportLoanDebt: true,
                    ResidencyStatus: "FOREIGNRESIDENT",
                    TFNExemptionType: "NOTQUOTED",
                    TaxFileNumber: "molestiae",
                    TaxFreeThresholdClaimed: true,
                    TaxOffsetEstimatedAmount: 35.099998,
                    UpwardVariationTaxWithholdingAmount: 70.199997,
                },
                TerminationDate: "consequatur",
                Title: "consequatur",
                TwitterUserName: "iure",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "qui",
                    },
                    shared.ValidationError{
                        Message: "asperiores",
                    },
                    shared.ValidationError{
                        Message: "dicta",
                    },
                },
            },
        },
    }
    
    res, err := s.PayrollAu.CreateEmployee(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
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
