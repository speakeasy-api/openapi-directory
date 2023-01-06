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
            XeroTenantID: "porro",
        },
        Request: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "velit",
                        AccountNumber: "sit",
                        Amount: 26.200001,
                        BSB: "ipsum",
                        Remainder: false,
                        StatementText: "et",
                    },
                    shared.BankAccount{
                        AccountName: "harum",
                        AccountNumber: "aliquid",
                        Amount: 41.099998,
                        BSB: "fugit",
                        Remainder: false,
                        StatementText: "in",
                    },
                },
                Classification: "vel",
                DateOfBirth: "debitis",
                Email: "dolorum",
                EmployeeGroupName: "eius",
                EmployeeID: "natus",
                FirstName: "quia",
                Gender: "I",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "aut",
                    AddressLine2: "itaque",
                    City: "porro",
                    Country: "ullam",
                    PostalCode: "in",
                    Region: "VIC",
                },
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: false,
                JobTitle: "ut",
                LastName: "repellendus",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "enim",
                        LeaveTypeID: "iste",
                        NumberOfUnits: 28.200001,
                        TypeOfUnits: "maiores",
                    },
                    shared.LeaveBalance{
                        LeaveName: "dolor",
                        LeaveTypeID: "veniam",
                        NumberOfUnits: 21.200001,
                        TypeOfUnits: "nihil",
                    },
                    shared.LeaveBalance{
                        LeaveName: "et",
                        LeaveTypeID: "labore",
                        NumberOfUnits: 27.100000,
                        TypeOfUnits: "non",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 70.099998,
                        CalculationType: "FIXEDAMOUNTEACHPERIOD",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 86.099998,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "sed",
                        NumberOfUnits: 89.199997,
                    },
                },
                MiddleNames: "id",
                Mobile: "animi",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 40.099998,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "et",
                            NumberOfUnits: 31.100000,
                            Percentage: 2.200000,
                        },
                        shared.DeductionLine{
                            Amount: 31.100000,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "delectus",
                            NumberOfUnits: 77.099998,
                            Percentage: 90.099998,
                        },
                        shared.DeductionLine{
                            Amount: 88.199997,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "et",
                            NumberOfUnits: 28.100000,
                            Percentage: 18.100000,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 27.100000,
                            AnnualSalary: 75.099998,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "saepe",
                            FixedAmount: 63.099998,
                            NormalNumberOfUnits: 94.099998,
                            NumberOfUnits: 94.199997,
                            NumberOfUnitsPerWeek: 68.099998,
                            RatePerUnit: 74.099998,
                        },
                        shared.EarningsLine{
                            Amount: 47.099998,
                            AnnualSalary: 22.100000,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "in",
                            FixedAmount: 61.200001,
                            NormalNumberOfUnits: 34.099998,
                            NumberOfUnits: 51.200001,
                            NumberOfUnitsPerWeek: 9.200000,
                            RatePerUnit: 42.200001,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 37.200001,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 53.200001,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "et",
                            NumberOfUnits: 0.100000,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 41.200001,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 13.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "totam",
                            NumberOfUnits: 32.200001,
                        },
                    },
                    OpeningBalanceDate: "ut",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 51.099998,
                            Description: "natus",
                            ExpenseAccount: "ipsam",
                            ReimbursementTypeID: "sit",
                        },
                        shared.ReimbursementLine{
                            Amount: 16.100000,
                            Description: "quo",
                            ExpenseAccount: "voluptas",
                            ReimbursementTypeID: "fugit",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 0.200000,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "libero",
                            LiabilityAccountCode: "velit",
                            MinimumMonthlyEarnings: 5.200000,
                            Percentage: 21.100000,
                            SuperMembershipID: "facilis",
                        },
                    },
                    Tax: "quos",
                },
                OrdinaryEarningsRateID: "et",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 36.099998,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "nemo",
                            NumberOfUnits: 39.200001,
                            Percentage: 10.200000,
                        },
                        shared.DeductionLine{
                            Amount: 83.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "suscipit",
                            NumberOfUnits: 59.099998,
                            Percentage: 60.200001,
                        },
                        shared.DeductionLine{
                            Amount: 62.200001,
                            CalculationType: "POSTTAX",
                            DeductionTypeID: "doloremque",
                            NumberOfUnits: 45.099998,
                            Percentage: 19.100000,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 1.200000,
                            AnnualSalary: 33.099998,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "perferendis",
                            FixedAmount: 46.200001,
                            NormalNumberOfUnits: 72.099998,
                            NumberOfUnits: 22.100000,
                            NumberOfUnitsPerWeek: 19.100000,
                            RatePerUnit: 43.099998,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 49.099998,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 75.099998,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "porro",
                            NumberOfUnits: 48.099998,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 15.200000,
                            CalculationType: "",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 11.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "alias",
                            NumberOfUnits: 18.100000,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 20.100000,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 35.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "voluptatum",
                            NumberOfUnits: 42.200001,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 32.200001,
                            Description: "doloremque",
                            ExpenseAccount: "error",
                            ReimbursementTypeID: "ipsam",
                        },
                        shared.ReimbursementLine{
                            Amount: 24.200001,
                            Description: "id",
                            ExpenseAccount: "incidunt",
                            ReimbursementTypeID: "adipisci",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 42.200001,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "quis",
                            LiabilityAccountCode: "qui",
                            MinimumMonthlyEarnings: 62.099998,
                            Percentage: 27.200001,
                            SuperMembershipID: "enim",
                        },
                        shared.SuperLine{
                            Amount: 20.200001,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYEE",
                            ExpenseAccountCode: "voluptas",
                            LiabilityAccountCode: "fugit",
                            MinimumMonthlyEarnings: 31.200001,
                            Percentage: 40.099998,
                            SuperMembershipID: "nemo",
                        },
                        shared.SuperLine{
                            Amount: 51.099998,
                            CalculationType: "FIXEDAMOUNT",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "cupiditate",
                            LiabilityAccountCode: "molestias",
                            MinimumMonthlyEarnings: 36.099998,
                            Percentage: 20.100000,
                            SuperMembershipID: "quo",
                        },
                    },
                },
                PayrollCalendarID: "vel",
                Phone: "rem",
                StartDate: "qui",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "earum",
                        SuperFundID: "esse",
                        SuperMembershipID: "cumque",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "distinctio",
                        SuperFundID: "adipisci",
                        SuperMembershipID: "dolores",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "similique",
                        SuperFundID: "possimus",
                        SuperMembershipID: "minima",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 70.099998,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: true,
                    EmployeeID: "iusto",
                    EmploymentBasis: "FULLTIME",
                    HasHELPDebt: false,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: false,
                    HasTradeSupportLoanDebt: true,
                    ResidencyStatus: "FOREIGNRESIDENT",
                    TFNExemptionType: "NOTQUOTED",
                    TaxFileNumber: "asperiores",
                    TaxFreeThresholdClaimed: true,
                    TaxOffsetEstimatedAmount: 11.100000,
                    UpwardVariationTaxWithholdingAmount: 96.099998,
                },
                TerminationDate: "architecto",
                Title: "voluptate",
                TwitterUserName: "dolor",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "qui",
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "quibusdam",
                        AccountNumber: "nesciunt",
                        Amount: 75.099998,
                        BSB: "exercitationem",
                        Remainder: true,
                        StatementText: "rem",
                    },
                    shared.BankAccount{
                        AccountName: "quidem",
                        AccountNumber: "odit",
                        Amount: 75.199997,
                        BSB: "optio",
                        Remainder: true,
                        StatementText: "dolor",
                    },
                },
                Classification: "in",
                DateOfBirth: "suscipit",
                Email: "occaecati",
                EmployeeGroupName: "sit",
                EmployeeID: "officiis",
                FirstName: "ducimus",
                Gender: "F",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "laboriosam",
                    AddressLine2: "eveniet",
                    City: "sed",
                    Country: "delectus",
                    PostalCode: "quam",
                    Region: "NSW",
                },
                IsAuthorisedToApproveLeave: false,
                IsAuthorisedToApproveTimesheets: false,
                JobTitle: "neque",
                LastName: "laboriosam",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "in",
                        LeaveTypeID: "optio",
                        NumberOfUnits: 52.099998,
                        TypeOfUnits: "et",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 48.200001,
                        CalculationType: "NOCALCULATIONREQUIRED",
                        EmploymentTerminationPaymentType: "O",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 84.199997,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "dolor",
                        NumberOfUnits: 10.100000,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 62.200001,
                        CalculationType: "BASEDONORDINARYEARNINGS",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 88.099998,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "ab",
                        NumberOfUnits: 49.200001,
                    },
                },
                MiddleNames: "eum",
                Mobile: "quia",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 30.200001,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "nihil",
                            NumberOfUnits: 56.200001,
                            Percentage: 16.200001,
                        },
                        shared.DeductionLine{
                            Amount: 41.200001,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "laudantium",
                            NumberOfUnits: 34.200001,
                            Percentage: 64.099998,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 66.199997,
                            AnnualSalary: 84.099998,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "alias",
                            FixedAmount: 80.199997,
                            NormalNumberOfUnits: 93.199997,
                            NumberOfUnits: 91.199997,
                            NumberOfUnitsPerWeek: 86.199997,
                            RatePerUnit: 30.200001,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 52.200001,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 81.099998,
                            IncludeSuperannuationGuaranteeContribution: false,
                            LeaveTypeID: "corrupti",
                            NumberOfUnits: 17.100000,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 54.099998,
                            CalculationType: "NOCALCULATIONREQUIRED",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 79.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "ullam",
                            NumberOfUnits: 77.099998,
                        },
                    },
                    OpeningBalanceDate: "culpa",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 13.200000,
                            Description: "aut",
                            ExpenseAccount: "necessitatibus",
                            ReimbursementTypeID: "esse",
                        },
                        shared.ReimbursementLine{
                            Amount: 57.099998,
                            Description: "quis",
                            ExpenseAccount: "et",
                            ReimbursementTypeID: "quae",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 96.099998,
                            CalculationType: "STATUTORY",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "quibusdam",
                            LiabilityAccountCode: "ducimus",
                            MinimumMonthlyEarnings: 32.200001,
                            Percentage: 30.100000,
                            SuperMembershipID: "quia",
                        },
                        shared.SuperLine{
                            Amount: 10.200000,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "ducimus",
                            LiabilityAccountCode: "reprehenderit",
                            MinimumMonthlyEarnings: 87.099998,
                            Percentage: 78.099998,
                            SuperMembershipID: "accusantium",
                        },
                    },
                    Tax: "a",
                },
                OrdinaryEarningsRateID: "porro",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 7.100000,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "cupiditate",
                            NumberOfUnits: 9.100000,
                            Percentage: 97.199997,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 59.099998,
                            AnnualSalary: 53.099998,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "sint",
                            FixedAmount: 53.200001,
                            NormalNumberOfUnits: 19.200001,
                            NumberOfUnits: 95.199997,
                            NumberOfUnitsPerWeek: 84.099998,
                            RatePerUnit: 37.099998,
                        },
                        shared.EarningsLine{
                            Amount: 69.199997,
                            AnnualSalary: 18.100000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "repudiandae",
                            FixedAmount: 75.099998,
                            NormalNumberOfUnits: 23.200001,
                            NumberOfUnits: 43.099998,
                            NumberOfUnitsPerWeek: 98.099998,
                            RatePerUnit: 24.200001,
                        },
                        shared.EarningsLine{
                            Amount: 83.099998,
                            AnnualSalary: 46.099998,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "architecto",
                            FixedAmount: 72.099998,
                            NormalNumberOfUnits: 24.100000,
                            NumberOfUnits: 47.200001,
                            NumberOfUnitsPerWeek: 7.200000,
                            RatePerUnit: 42.099998,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 27.200001,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 80.199997,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "maxime",
                            NumberOfUnits: 46.200001,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 65.199997,
                            CalculationType: "FIXEDAMOUNTEACHPERIOD",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 9.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "veritatis",
                            NumberOfUnits: 85.199997,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 54.200001,
                            Description: "vitae",
                            ExpenseAccount: "beatae",
                            ReimbursementTypeID: "nemo",
                        },
                        shared.ReimbursementLine{
                            Amount: 20.100000,
                            Description: "inventore",
                            ExpenseAccount: "qui",
                            ReimbursementTypeID: "iure",
                        },
                        shared.ReimbursementLine{
                            Amount: 61.099998,
                            Description: "quasi",
                            ExpenseAccount: "illo",
                            ReimbursementTypeID: "at",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 41.099998,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "est",
                            LiabilityAccountCode: "molestiae",
                            MinimumMonthlyEarnings: 98.099998,
                            Percentage: 62.099998,
                            SuperMembershipID: "omnis",
                        },
                        shared.SuperLine{
                            Amount: 26.100000,
                            CalculationType: "STATUTORY",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "fugit",
                            LiabilityAccountCode: "rerum",
                            MinimumMonthlyEarnings: 36.200001,
                            Percentage: 35.099998,
                            SuperMembershipID: "qui",
                        },
                    },
                },
                PayrollCalendarID: "iure",
                Phone: "porro",
                StartDate: "ducimus",
                Status: "TERMINATED",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "natus",
                        SuperFundID: "optio",
                        SuperMembershipID: "inventore",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "neque",
                        SuperFundID: "quod",
                        SuperMembershipID: "autem",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 25.100000,
                    AustralianResidentForTaxPurposes: true,
                    EligibleToReceiveLeaveLoading: true,
                    EmployeeID: "consectetur",
                    EmploymentBasis: "FULLTIME",
                    HasHELPDebt: true,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: false,
                    HasTradeSupportLoanDebt: false,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TFNExemptionType: "PENDING",
                    TaxFileNumber: "repudiandae",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 44.200001,
                    UpwardVariationTaxWithholdingAmount: 52.200001,
                },
                TerminationDate: "ab",
                Title: "distinctio",
                TwitterUserName: "possimus",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "id",
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
