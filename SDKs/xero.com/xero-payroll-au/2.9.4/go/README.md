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
            XeroTenantID: "sit",
        },
        Request: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: "expedita",
                        AccountNumber: "consequuntur",
                        Amount: 96.199997,
                        BSB: "voluptas",
                        Remainder: true,
                        StatementText: "et",
                    },
                    shared.BankAccount{
                        AccountName: "nihil",
                        AccountNumber: "rerum",
                        Amount: 59.099998,
                        BSB: "voluptatum",
                        Remainder: false,
                        StatementText: "ut",
                    },
                },
                Classification: "dolorem",
                DateOfBirth: "et",
                Email: "voluptate",
                EmployeeGroupName: "iste",
                EmployeeID: "vitae",
                FirstName: "totam",
                Gender: "N",
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "illum",
                    AddressLine2: "debitis",
                    City: "vel",
                    Country: "odio",
                    PostalCode: "dolore",
                    Region: "SA",
                },
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: true,
                JobTitle: "totam",
                LastName: "commodi",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: "est",
                        LeaveTypeID: "aut",
                        NumberOfUnits: 10.200000,
                        TypeOfUnits: "voluptas",
                    },
                    shared.LeaveBalance{
                        LeaveName: "omnis",
                        LeaveTypeID: "aut",
                        NumberOfUnits: 76.099998,
                        TypeOfUnits: "officiis",
                    },
                    shared.LeaveBalance{
                        LeaveName: "autem",
                        LeaveTypeID: "consectetur",
                        NumberOfUnits: 0.100000,
                        TypeOfUnits: "qui",
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 88.099998,
                        CalculationType: "ENTERRATEINPAYTEMPLATE",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 77.099998,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "aut",
                        NumberOfUnits: 30.200001,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 97.099998,
                        CalculationType: "",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "PAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 80.199997,
                        IncludeSuperannuationGuaranteeContribution: false,
                        LeaveTypeID: "ipsum",
                        NumberOfUnits: 66.099998,
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: 47.099998,
                        CalculationType: "BASEDONORDINARYEARNINGS",
                        EmploymentTerminationPaymentType: "R",
                        EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                        FullTimeNumberOfUnitsPerPeriod: 63.200001,
                        IncludeSuperannuationGuaranteeContribution: true,
                        LeaveTypeID: "qui",
                        NumberOfUnits: 72.199997,
                    },
                },
                MiddleNames: "autem",
                Mobile: "qui",
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 26.100000,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "ullam",
                            NumberOfUnits: 92.099998,
                            Percentage: 68.099998,
                        },
                        shared.DeductionLine{
                            Amount: 38.200001,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "soluta",
                            NumberOfUnits: 41.200001,
                            Percentage: 89.199997,
                        },
                        shared.DeductionLine{
                            Amount: 41.099998,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "illo",
                            NumberOfUnits: 6.100000,
                            Percentage: 82.099998,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 8.200000,
                            AnnualSalary: 3.200000,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "laboriosam",
                            FixedAmount: 80.199997,
                            NormalNumberOfUnits: 7.100000,
                            NumberOfUnits: 78.099998,
                            NumberOfUnitsPerWeek: 47.200001,
                            RatePerUnit: 35.200001,
                        },
                        shared.EarningsLine{
                            Amount: 20.200001,
                            AnnualSalary: 26.200001,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "explicabo",
                            FixedAmount: 42.099998,
                            NormalNumberOfUnits: 15.200000,
                            NumberOfUnits: 66.099998,
                            NumberOfUnitsPerWeek: 94.199997,
                            RatePerUnit: 97.199997,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 97.099998,
                            CalculationType: "BASEDONORDINARYEARNINGS",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 31.100000,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "vel",
                            NumberOfUnits: 87.099998,
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 50.200001,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "R",
                            EntitlementFinalPayPayoutType: "NOTPAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 68.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "vel",
                            NumberOfUnits: 91.099998,
                        },
                    },
                    OpeningBalanceDate: "qui",
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 96.099998,
                            Description: "porro",
                            ExpenseAccount: "rerum",
                            ReimbursementTypeID: "et",
                        },
                        shared.ReimbursementLine{
                            Amount: 96.099998,
                            Description: "laborum",
                            ExpenseAccount: "rerum",
                            ReimbursementTypeID: "ut",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 92.199997,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "aperiam",
                            LiabilityAccountCode: "consequuntur",
                            MinimumMonthlyEarnings: 54.099998,
                            Percentage: 70.199997,
                            SuperMembershipID: "ipsa",
                        },
                        shared.SuperLine{
                            Amount: 20.100000,
                            CalculationType: "STATUTORY",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "fuga",
                            LiabilityAccountCode: "sed",
                            MinimumMonthlyEarnings: 83.099998,
                            Percentage: 30.100000,
                            SuperMembershipID: "cupiditate",
                        },
                        shared.SuperLine{
                            Amount: 10.200000,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "corrupti",
                            LiabilityAccountCode: "enim",
                            MinimumMonthlyEarnings: 85.099998,
                            Percentage: 84.199997,
                            SuperMembershipID: "neque",
                        },
                    },
                    Tax: "consequuntur",
                },
                OrdinaryEarningsRateID: "quia",
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: 28.100000,
                            CalculationType: "FIXEDAMOUNT",
                            DeductionTypeID: "voluptatem",
                            NumberOfUnits: 20.200001,
                            Percentage: 73.099998,
                        },
                        shared.DeductionLine{
                            Amount: 45.099998,
                            CalculationType: "PRETAX",
                            DeductionTypeID: "in",
                            NumberOfUnits: 18.100000,
                            Percentage: 57.099998,
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: 99.199997,
                            AnnualSalary: 50.099998,
                            CalculationType: "USEEARNINGSRATE",
                            EarningsRateID: "et",
                            FixedAmount: 47.099998,
                            NormalNumberOfUnits: 3.200000,
                            NumberOfUnits: 58.200001,
                            NumberOfUnitsPerWeek: 69.199997,
                            RatePerUnit: 66.199997,
                        },
                        shared.EarningsLine{
                            Amount: 25.200001,
                            AnnualSalary: 16.200001,
                            CalculationType: "ENTEREARNINGSRATE",
                            EarningsRateID: "ipsam",
                            FixedAmount: 78.199997,
                            NormalNumberOfUnits: 46.099998,
                            NumberOfUnits: 84.099998,
                            NumberOfUnitsPerWeek: 67.099998,
                            RatePerUnit: 26.200001,
                        },
                        shared.EarningsLine{
                            Amount: 9.200000,
                            AnnualSalary: 30.100000,
                            CalculationType: "ANNUALSALARY",
                            EarningsRateID: "a",
                            FixedAmount: 80.099998,
                            NormalNumberOfUnits: 55.200001,
                            NumberOfUnits: 66.199997,
                            NumberOfUnitsPerWeek: 21.100000,
                            RatePerUnit: 19.100000,
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: 48.200001,
                            CalculationType: "ENTERRATEINPAYTEMPLATE",
                            EmploymentTerminationPaymentType: "O",
                            EntitlementFinalPayPayoutType: "PAIDOUT",
                            FullTimeNumberOfUnitsPerPeriod: 47.099998,
                            IncludeSuperannuationGuaranteeContribution: true,
                            LeaveTypeID: "aspernatur",
                            NumberOfUnits: 16.200001,
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: 40.200001,
                            Description: "illum",
                            ExpenseAccount: "accusantium",
                            ReimbursementTypeID: "atque",
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: 40.099998,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SALARYSACRIFICE",
                            ExpenseAccountCode: "vero",
                            LiabilityAccountCode: "alias",
                            MinimumMonthlyEarnings: 81.099998,
                            Percentage: 2.200000,
                            SuperMembershipID: "beatae",
                        },
                        shared.SuperLine{
                            Amount: 31.200001,
                            CalculationType: "PERCENTAGEOFEARNINGS",
                            ContributionType: "SGC",
                            ExpenseAccountCode: "magni",
                            LiabilityAccountCode: "necessitatibus",
                            MinimumMonthlyEarnings: 3.100000,
                            Percentage: 69.199997,
                            SuperMembershipID: "ut",
                        },
                        shared.SuperLine{
                            Amount: 99.199997,
                            CalculationType: "STATUTORY",
                            ContributionType: "EMPLOYERADDITIONAL",
                            ExpenseAccountCode: "quo",
                            LiabilityAccountCode: "et",
                            MinimumMonthlyEarnings: 61.200001,
                            Percentage: 9.100000,
                            SuperMembershipID: "asperiores",
                        },
                    },
                },
                PayrollCalendarID: "quo",
                Phone: "ea",
                StartDate: "soluta",
                Status: "ACTIVE",
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "blanditiis",
                        SuperFundID: "facere",
                        SuperMembershipID: "in",
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "et",
                        SuperFundID: "odit",
                        SuperMembershipID: "est",
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: 67.199997,
                    AustralianResidentForTaxPurposes: false,
                    EligibleToReceiveLeaveLoading: true,
                    EmployeeID: "et",
                    EmploymentBasis: "PARTTIME",
                    HasHELPDebt: false,
                    HasSFSSDebt: false,
                    HasStudentStartupLoan: true,
                    HasTradeSupportLoanDebt: true,
                    ResidencyStatus: "AUSTRALIANRESIDENT",
                    TFNExemptionType: "UNDER18",
                    TaxFileNumber: "ea",
                    TaxFreeThresholdClaimed: false,
                    TaxOffsetEstimatedAmount: 25.200001,
                    UpwardVariationTaxWithholdingAmount: 41.099998,
                },
                TerminationDate: "qui",
                Title: "magni",
                TwitterUserName: "minus",
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: "aut",
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
