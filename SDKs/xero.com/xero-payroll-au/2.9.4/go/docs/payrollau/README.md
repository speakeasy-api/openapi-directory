# PayrollAu

## Overview

Operations available to regular developers

### Available Operations

* [CreateEmployee](#createemployee) - Creates a payroll employee
* [CreateLeaveApplication](#createleaveapplication) - Creates a leave application
* [CreatePayItem](#createpayitem) - Creates a pay item
* [CreatePayRun](#createpayrun) - Creates a pay run
* [CreatePayrollCalendar](#createpayrollcalendar) - Creates a Payroll Calendar
* [CreateSuperfund](#createsuperfund) - Creates a superfund
* [CreateTimesheet](#createtimesheet) - Creates a timesheet
* [GetEmployee](#getemployee) - Retrieves an employee's detail by unique employee id
* [GetEmployees](#getemployees) - Searches payroll employees
* [GetLeaveApplication](#getleaveapplication) - Retrieves a leave application by a unique leave application id
* [GetLeaveApplications](#getleaveapplications) - Retrieves leave applications
* [GetPayItems](#getpayitems) - Retrieves pay items
* [GetPayRun](#getpayrun) - Retrieves a pay run by using a unique pay run id
* [GetPayRuns](#getpayruns) - Retrieves pay runs
* [GetPayrollCalendar](#getpayrollcalendar) - Retrieves payroll calendar by using a unique payroll calendar ID
* [GetPayrollCalendars](#getpayrollcalendars) - Retrieves payroll calendars
* [GetPayslip](#getpayslip) - Retrieves for a payslip by a unique payslip id
* [GetSettings](#getsettings) - Retrieves payroll settings
* [GetSuperfund](#getsuperfund) - Retrieves a superfund by using a unique superfund ID
* [GetSuperfundProducts](#getsuperfundproducts) - Retrieves superfund products
* [GetSuperfunds](#getsuperfunds) - Retrieves superfunds
* [GetTimesheet](#gettimesheet) - Retrieves a timesheet by using a unique timesheet id
* [GetTimesheets](#gettimesheets) - Retrieves timesheets
* [UpdateEmployee](#updateemployee) - Updates an employee's detail
* [UpdateLeaveApplication](#updateleaveapplication) - Updates a specific leave application
* [UpdatePayRun](#updatepayrun) - Updates a pay run
* [UpdatePayslip](#updatepayslip) - Updates a payslip
* [UpdateSuperfund](#updatesuperfund) - Updates a superfund
* [UpdateTimesheet](#updatetimesheet) - Updates a timesheet

## CreateEmployee

Creates a payroll employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreateEmployee(ctx, operations.CreateEmployeeRequest{
        RequestBody: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                },
                Classification: sdk.String("99383"),
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: sdk.String("developer@me.com"),
                EmployeeGroupName: sdk.String("marketing"),
                EmployeeID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
                FirstName: "Karen",
                Gender: shared.EmployeeGenderEnumF.ToPointer(),
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: sdk.String("Apt 4"),
                    City: sdk.String("St. Kilda"),
                    Country: sdk.String("AUSTRALIA"),
                    PostalCode: sdk.String("3182"),
                    Region: shared.StateEnumVic.ToPointer(),
                },
                IsAuthorisedToApproveLeave: sdk.Bool(false),
                IsAuthorisedToApproveTimesheets: sdk.Bool(true),
                JobTitle: sdk.String("Manager"),
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                },
                MiddleNames: sdk.String("Adena"),
                Mobile: sdk.String("415-234-5678"),
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    OpeningBalanceDate: sdk.String("/Date(322560000000+0000)/"),
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                    Tax: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                },
                OrdinaryEarningsRateID: sdk.String("5gj1e5cc-9835-40d5-bb18-09fdb118db9c"),
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                },
                PayrollCalendarID: sdk.String("2ee8e5cc-9835-40d5-bb18-09fdb118db9c"),
                Phone: sdk.String("415-555-1212"),
                StartDate: sdk.String("/Date(320284900000+0000)/"),
                Status: shared.EmployeeStatusEnumTerminated.ToPointer(),
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumCasual.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumForeignresident.ToPointer(),
                    TFNExemptionType: shared.TFNExemptionTypeEnumPensioner.ToPointer(),
                    TaxFileNumber: sdk.String("123123123"),
                    TaxFreeThresholdClaimed: sdk.Bool(false),
                    TaxOffsetEstimatedAmount: sdk.Float64(100),
                    UpwardVariationTaxWithholdingAmount: sdk.Float64(50),
                },
                TerminationDate: sdk.String("/Date(1584662400000+0000)/"),
                Title: sdk.String("Mrs"),
                TwitterUserName: sdk.String("xeroapi"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("mollitia"),
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                },
                Classification: sdk.String("99383"),
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: sdk.String("developer@me.com"),
                EmployeeGroupName: sdk.String("marketing"),
                EmployeeID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
                FirstName: "Karen",
                Gender: shared.EmployeeGenderEnumF.ToPointer(),
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: sdk.String("Apt 4"),
                    City: sdk.String("St. Kilda"),
                    Country: sdk.String("AUSTRALIA"),
                    PostalCode: sdk.String("3182"),
                    Region: shared.StateEnumVic.ToPointer(),
                },
                IsAuthorisedToApproveLeave: sdk.Bool(false),
                IsAuthorisedToApproveTimesheets: sdk.Bool(true),
                JobTitle: sdk.String("Manager"),
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumNocalculationrequired.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                },
                MiddleNames: sdk.String("Adena"),
                Mobile: sdk.String("415-234-5678"),
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    OpeningBalanceDate: sdk.String("/Date(322560000000+0000)/"),
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                    Tax: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                },
                OrdinaryEarningsRateID: sdk.String("5gj1e5cc-9835-40d5-bb18-09fdb118db9c"),
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumNocalculationrequired.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                },
                PayrollCalendarID: sdk.String("2ee8e5cc-9835-40d5-bb18-09fdb118db9c"),
                Phone: sdk.String("415-555-1212"),
                StartDate: sdk.String("/Date(320284900000+0000)/"),
                Status: shared.EmployeeStatusEnumActive.ToPointer(),
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumFulltime.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumWorkingholidaymaker.ToPointer(),
                    TFNExemptionType: shared.TFNExemptionTypeEnumNotquoted.ToPointer(),
                    TaxFileNumber: sdk.String("123123123"),
                    TaxFreeThresholdClaimed: sdk.Bool(false),
                    TaxOffsetEstimatedAmount: sdk.Float64(100),
                    UpwardVariationTaxWithholdingAmount: sdk.Float64(50),
                },
                TerminationDate: sdk.String("/Date(1584662400000+0000)/"),
                Title: sdk.String("Mrs"),
                TwitterUserName: sdk.String("xeroapi"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("cumque"),
                    },
                },
            },
        },
        XeroTenantID: "corporis",
    }, operations.CreateEmployeeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
}
```

## CreateLeaveApplication

Creates a leave application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreateLeaveApplication(ctx, operations.CreateLeaveApplicationRequest{
        RequestBody: []shared.LeaveApplicationInput{
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumProcessed.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("dignissimos"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("eaque"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("quis"),
                    },
                },
            },
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("dolores"),
                    },
                },
            },
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumProcessed.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumScheduled.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("recusandae"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("omnis"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("facilis"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("perspiciatis"),
                    },
                },
            },
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumProcessed.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("blanditiis"),
                    },
                },
            },
        },
        XeroTenantID: "error",
    }, operations.CreateLeaveApplicationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaveApplications != nil {
        // handle response
    }
}
```

## CreatePayItem

Creates a pay item

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreatePayItem(ctx, operations.CreatePayItemRequest{
        PayItemInput: shared.PayItemInput{
            DeductionTypes: []shared.DeductionTypeInput{
                shared.DeductionTypeInput{
                    AccountCode: sdk.String("720"),
                    CurrentRecord: sdk.Bool(true),
                    DeductionCategory: shared.DeductionTypeDeductionCategoryEnumUnionfees.ToPointer(),
                    DeductionTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    IsExemptFromW1: sdk.Bool(false),
                    Name: sdk.String("PTO"),
                    ReducesSuper: sdk.Bool(false),
                    ReducesTax: sdk.Bool(false),
                },
            },
            EarningsRates: []shared.EarningsRateInput{
                shared.EarningsRateInput{
                    AccountCode: sdk.String("720"),
                    AccrueLeave: sdk.Bool(false),
                    AllowanceType: shared.AllowanceTypeEnumTransport.ToPointer(),
                    Amount: sdk.Float64(50.3),
                    CurrentRecord: sdk.Bool(true),
                    EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    EarningsType: shared.EarningsTypeEnumLumpsume.ToPointer(),
                    EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                    IsExemptFromSuper: sdk.Bool(false),
                    IsExemptFromTax: sdk.Bool(false),
                    IsReportableAsW1: sdk.Bool(false),
                    Multiplier: sdk.Float64(1.5),
                    Name: sdk.String("PTO"),
                    RatePerUnit: sdk.String("10"),
                    RateType: shared.RateTypeEnumFixedamount.ToPointer(),
                    TypeOfUnits: sdk.String("Fixed"),
                },
                shared.EarningsRateInput{
                    AccountCode: sdk.String("720"),
                    AccrueLeave: sdk.Bool(false),
                    AllowanceType: shared.AllowanceTypeEnumMeals.ToPointer(),
                    Amount: sdk.Float64(50.3),
                    CurrentRecord: sdk.Bool(true),
                    EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    EarningsType: shared.EarningsTypeEnumLumpsuma.ToPointer(),
                    EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                    IsExemptFromSuper: sdk.Bool(false),
                    IsExemptFromTax: sdk.Bool(false),
                    IsReportableAsW1: sdk.Bool(false),
                    Multiplier: sdk.Float64(1.5),
                    Name: sdk.String("PTO"),
                    RatePerUnit: sdk.String("10"),
                    RateType: shared.RateTypeEnumRateperunit.ToPointer(),
                    TypeOfUnits: sdk.String("Fixed"),
                },
                shared.EarningsRateInput{
                    AccountCode: sdk.String("720"),
                    AccrueLeave: sdk.Bool(false),
                    AllowanceType: shared.AllowanceTypeEnumMeals.ToPointer(),
                    Amount: sdk.Float64(50.3),
                    CurrentRecord: sdk.Bool(true),
                    EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    EarningsType: shared.EarningsTypeEnumLumpsumb.ToPointer(),
                    EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                    IsExemptFromSuper: sdk.Bool(false),
                    IsExemptFromTax: sdk.Bool(false),
                    IsReportableAsW1: sdk.Bool(false),
                    Multiplier: sdk.Float64(1.5),
                    Name: sdk.String("PTO"),
                    RatePerUnit: sdk.String("10"),
                    RateType: shared.RateTypeEnumRateperunit.ToPointer(),
                    TypeOfUnits: sdk.String("Fixed"),
                },
            },
            LeaveTypes: []shared.LeaveTypeInput{
                shared.LeaveTypeInput{
                    CurrentRecord: sdk.Bool(true),
                    IsPaidLeave: sdk.Bool(true),
                    LeaveLoadingRate: sdk.Float64(2),
                    LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    Name: sdk.String("PTO"),
                    NormalEntitlement: sdk.Float64(152),
                    ShowOnPayslip: sdk.Bool(true),
                    TypeOfUnits: sdk.String("Hours"),
                },
                shared.LeaveTypeInput{
                    CurrentRecord: sdk.Bool(true),
                    IsPaidLeave: sdk.Bool(true),
                    LeaveLoadingRate: sdk.Float64(2),
                    LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    Name: sdk.String("PTO"),
                    NormalEntitlement: sdk.Float64(152),
                    ShowOnPayslip: sdk.Bool(true),
                    TypeOfUnits: sdk.String("Hours"),
                },
            },
            ReimbursementTypes: []shared.ReimbursementTypeInput{
                shared.ReimbursementTypeInput{
                    AccountCode: sdk.String("720"),
                    CurrentRecord: sdk.Bool(true),
                    Name: sdk.String("PTO"),
                    ReimbursementTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                },
                shared.ReimbursementTypeInput{
                    AccountCode: sdk.String("720"),
                    CurrentRecord: sdk.Bool(true),
                    Name: sdk.String("PTO"),
                    ReimbursementTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                },
                shared.ReimbursementTypeInput{
                    AccountCode: sdk.String("720"),
                    CurrentRecord: sdk.Bool(true),
                    Name: sdk.String("PTO"),
                    ReimbursementTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                },
            },
        },
        XeroTenantID: "aliquid",
    }, operations.CreatePayItemSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayItems != nil {
        // handle response
    }
}
```

## CreatePayRun

Creates a pay run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreatePayRun(ctx, operations.CreatePayRunRequest{
        RequestBody: []shared.PayRunInput{
            shared.PayRunInput{
                Deductions: sdk.Float64(2098.43),
                NetPay: sdk.Float64(862.5),
                PayRunID: sdk.String("bba1d10f-63b1-4692-b5c5-a99f869523a4"),
                PayRunPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunStatus: shared.PayRunStatusEnumDraft.ToPointer(),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
                PayslipMessage: sdk.String("Thanks for being awesome"),
                Payslips: []shared.PayslipSummaryInput{
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(2187.49),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(9443.73),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                },
                Reimbursement: sdk.Float64(5695.74),
                Super: sdk.Float64(75.6),
                Tax: sdk.Float64(198),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("voluptate"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("dignissimos"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("reiciendis"),
                    },
                },
                Wages: sdk.Float64(1060.5),
            },
        },
        XeroTenantID: "amet",
    }, operations.CreatePayRunSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRuns != nil {
        // handle response
    }
}
```

## CreatePayrollCalendar

Creates a Payroll Calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreatePayrollCalendar(ctx, operations.CreatePayrollCalendarRequest{
        RequestBody: []shared.PayrollCalendarInput{
            shared.PayrollCalendarInput{
                CalendarType: shared.CalendarTypeEnumFortnightly.ToPointer(),
                Name: sdk.String("Fortnightly Calendar"),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("ipsa"),
                    },
                },
            },
            shared.PayrollCalendarInput{
                CalendarType: shared.CalendarTypeEnumWeekly.ToPointer(),
                Name: sdk.String("Fortnightly Calendar"),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("odio"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("quaerat"),
                    },
                },
            },
            shared.PayrollCalendarInput{
                CalendarType: shared.CalendarTypeEnumQuarterly.ToPointer(),
                Name: sdk.String("Fortnightly Calendar"),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("voluptatibus"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("voluptas"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("natus"),
                    },
                },
            },
        },
        XeroTenantID: "eos",
    }, operations.CreatePayrollCalendarSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayrollCalendars != nil {
        // handle response
    }
}
```

## CreateSuperfund

Creates a superfund

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreateSuperfund(ctx, operations.CreateSuperfundRequest{
        RequestBody: []shared.SuperFundInput{
            shared.SuperFundInput{
                Abn: sdk.String("40022701955"),
                AccountName: sdk.String("Money account"),
                AccountNumber: sdk.String("234234234"),
                Bsb: sdk.String("234324"),
                ElectronicServiceAddress: sdk.String("12345678"),
                EmployerNumber: sdk.String("324324"),
                Name: sdk.String("MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"),
                Spin: sdk.String("4545445454"),
                SuperFundID: sdk.String("bfac31bd-ea62-4fc8-a5e7-7965d9504b15"),
                Type: shared.SuperFundTypeEnumRegulated,
                Usi: sdk.String("40022701955001"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("ab"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("soluta"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("dolorum"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("iusto"),
                    },
                },
            },
            shared.SuperFundInput{
                Abn: sdk.String("40022701955"),
                AccountName: sdk.String("Money account"),
                AccountNumber: sdk.String("234234234"),
                Bsb: sdk.String("234324"),
                ElectronicServiceAddress: sdk.String("12345678"),
                EmployerNumber: sdk.String("324324"),
                Name: sdk.String("MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"),
                Spin: sdk.String("4545445454"),
                SuperFundID: sdk.String("bfac31bd-ea62-4fc8-a5e7-7965d9504b15"),
                Type: shared.SuperFundTypeEnumRegulated,
                Usi: sdk.String("40022701955001"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("deleniti"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("omnis"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("necessitatibus"),
                    },
                },
            },
            shared.SuperFundInput{
                Abn: sdk.String("40022701955"),
                AccountName: sdk.String("Money account"),
                AccountNumber: sdk.String("234234234"),
                Bsb: sdk.String("234324"),
                ElectronicServiceAddress: sdk.String("12345678"),
                EmployerNumber: sdk.String("324324"),
                Name: sdk.String("MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"),
                Spin: sdk.String("4545445454"),
                SuperFundID: sdk.String("bfac31bd-ea62-4fc8-a5e7-7965d9504b15"),
                Type: shared.SuperFundTypeEnumSmsf,
                Usi: sdk.String("40022701955001"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("nihil"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("ipsum"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("voluptate"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("id"),
                    },
                },
            },
        },
        XeroTenantID: "saepe",
    }, operations.CreateSuperfundSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperFunds != nil {
        // handle response
    }
}
```

## CreateTimesheet

Creates a timesheet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.CreateTimesheet(ctx, operations.CreateTimesheetRequest{
        RequestBody: []shared.TimesheetInput{
            shared.TimesheetInput{
                EmployeeID: "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
                EndDate: "/Date(322560000000+0000)/",
                Hours: sdk.Float64(31),
                StartDate: "/Date(322560000000+0000)/",
                Status: shared.TimesheetStatusEnumDraft.ToPointer(),
                TimesheetID: sdk.String("049765fc-4506-48fb-bf88-3578dec0ec47"),
                TimesheetLines: []shared.TimesheetLineInput{
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                },
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("accusamus"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("ad"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("saepe"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("suscipit"),
                    },
                },
            },
            shared.TimesheetInput{
                EmployeeID: "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
                EndDate: "/Date(322560000000+0000)/",
                Hours: sdk.Float64(31),
                StartDate: "/Date(322560000000+0000)/",
                Status: shared.TimesheetStatusEnumRejected.ToPointer(),
                TimesheetID: sdk.String("049765fc-4506-48fb-bf88-3578dec0ec47"),
                TimesheetLines: []shared.TimesheetLineInput{
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                            3,
                            3,
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                            3,
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                },
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("alias"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("at"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("quaerat"),
                    },
                },
            },
        },
        XeroTenantID: "tempora",
    }, operations.CreateTimesheetSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Timesheets != nil {
        // handle response
    }
}
```

## GetEmployee

Retrieves an employee's detail by unique employee id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetEmployee(ctx, operations.GetEmployeeRequest{
        EmployeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "vel",
    }, operations.GetEmployeeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
}
```

## GetEmployees

Searches payroll employees

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetEmployees(ctx, operations.GetEmployeesRequest{
        IfModifiedSince: sdk.String("quod"),
        XeroTenantID: "officiis",
        Order: sdk.String("qui"),
        Page: sdk.Int64(679880),
        Where: sdk.String("a"),
    }, operations.GetEmployeesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
}
```

## GetLeaveApplication

Retrieves a leave application by a unique leave application id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetLeaveApplication(ctx, operations.GetLeaveApplicationRequest{
        LeaveApplicationID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "esse",
    }, operations.GetLeaveApplicationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaveApplications != nil {
        // handle response
    }
}
```

## GetLeaveApplications

Retrieves leave applications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetLeaveApplications(ctx, operations.GetLeaveApplicationsRequest{
        IfModifiedSince: sdk.String("harum"),
        XeroTenantID: "iusto",
        Order: sdk.String("ipsum"),
        Page: sdk.Int64(788740),
        Where: sdk.String("tenetur"),
    }, operations.GetLeaveApplicationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaveApplications != nil {
        // handle response
    }
}
```

## GetPayItems

Retrieves pay items

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayItems(ctx, operations.GetPayItemsRequest{
        IfModifiedSince: sdk.String("amet"),
        XeroTenantID: "tempore",
        Order: sdk.String("accusamus"),
        Page: sdk.Int64(253941),
        Where: sdk.String("enim"),
    }, operations.GetPayItemsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayItems != nil {
        // handle response
    }
}
```

## GetPayRun

Retrieves a pay run by using a unique pay run id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayRun(ctx, operations.GetPayRunRequest{
        PayRunID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "dolorem",
    }, operations.GetPayRunSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRuns != nil {
        // handle response
    }
}
```

## GetPayRuns

Retrieves pay runs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayRuns(ctx, operations.GetPayRunsRequest{
        IfModifiedSince: sdk.String("sapiente"),
        XeroTenantID: "totam",
        Order: sdk.String("nihil"),
        Page: sdk.Int64(25662),
        Where: sdk.String("expedita"),
    }, operations.GetPayRunsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRuns != nil {
        // handle response
    }
}
```

## GetPayrollCalendar

Retrieves payroll calendar by using a unique payroll calendar ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayrollCalendar(ctx, operations.GetPayrollCalendarRequest{
        PayrollCalendarID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "neque",
    }, operations.GetPayrollCalendarSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayrollCalendars != nil {
        // handle response
    }
}
```

## GetPayrollCalendars

Retrieves payroll calendars

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayrollCalendars(ctx, operations.GetPayrollCalendarsRequest{
        IfModifiedSince: sdk.String("sed"),
        XeroTenantID: "vel",
        Order: sdk.String("libero"),
        Page: sdk.Int64(374170),
        Where: sdk.String("deserunt"),
    }, operations.GetPayrollCalendarsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayrollCalendars != nil {
        // handle response
    }
}
```

## GetPayslip

Retrieves for a payslip by a unique payslip id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetPayslip(ctx, operations.GetPayslipRequest{
        PayslipID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "quam",
    }, operations.GetPayslipSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayslipObject != nil {
        // handle response
    }
}
```

## GetSettings

Retrieves payroll settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetSettings(ctx, operations.GetSettingsRequest{
        XeroTenantID: "ipsum",
    }, operations.GetSettingsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingsObject != nil {
        // handle response
    }
}
```

## GetSuperfund

Retrieves a superfund by using a unique superfund ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetSuperfund(ctx, operations.GetSuperfundRequest{
        SuperFundID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "incidunt",
    }, operations.GetSuperfundSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperFunds != nil {
        // handle response
    }
}
```

## GetSuperfundProducts

Retrieves superfund products

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetSuperfundProducts(ctx, operations.GetSuperfundProductsRequest{
        Abn: sdk.String("qui"),
        Usi: sdk.String("cupiditate"),
        XeroTenantID: "maxime",
    }, operations.GetSuperfundProductsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperFundProducts != nil {
        // handle response
    }
}
```

## GetSuperfunds

Retrieves superfunds

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetSuperfunds(ctx, operations.GetSuperfundsRequest{
        IfModifiedSince: sdk.String("pariatur"),
        XeroTenantID: "soluta",
        Order: sdk.String("dicta"),
        Page: sdk.Int64(674848),
        Where: sdk.String("totam"),
    }, operations.GetSuperfundsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperFunds != nil {
        // handle response
    }
}
```

## GetTimesheet

Retrieves a timesheet by using a unique timesheet id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetTimesheet(ctx, operations.GetTimesheetRequest{
        TimesheetID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "incidunt",
    }, operations.GetTimesheetSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimesheetObject != nil {
        // handle response
    }
}
```

## GetTimesheets

Retrieves timesheets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.GetTimesheets(ctx, operations.GetTimesheetsRequest{
        IfModifiedSince: sdk.String("aspernatur"),
        XeroTenantID: "dolores",
        Order: sdk.String("distinctio"),
        Page: sdk.Int64(704474),
        Where: sdk.String("aliquid"),
    }, operations.GetTimesheetsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Timesheets != nil {
        // handle response
    }
}
```

## UpdateEmployee

Update properties on a single employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdateEmployee(ctx, operations.UpdateEmployeeRequest{
        EmployeeID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        RequestBody: []shared.EmployeeInput{
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                },
                Classification: sdk.String("99383"),
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: sdk.String("developer@me.com"),
                EmployeeGroupName: sdk.String("marketing"),
                EmployeeID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
                FirstName: "Karen",
                Gender: shared.EmployeeGenderEnumF.ToPointer(),
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: sdk.String("Apt 4"),
                    City: sdk.String("St. Kilda"),
                    Country: sdk.String("AUSTRALIA"),
                    PostalCode: sdk.String("3182"),
                    Region: shared.StateEnumVic.ToPointer(),
                },
                IsAuthorisedToApproveLeave: sdk.Bool(false),
                IsAuthorisedToApproveTimesheets: sdk.Bool(true),
                JobTitle: sdk.String("Manager"),
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                },
                MiddleNames: sdk.String("Adena"),
                Mobile: sdk.String("415-234-5678"),
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    OpeningBalanceDate: sdk.String("/Date(322560000000+0000)/"),
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSalarysacrifice.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                    Tax: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                },
                OrdinaryEarningsRateID: sdk.String("5gj1e5cc-9835-40d5-bb18-09fdb118db9c"),
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumNocalculationrequired.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSalarysacrifice.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                },
                PayrollCalendarID: sdk.String("2ee8e5cc-9835-40d5-bb18-09fdb118db9c"),
                Phone: sdk.String("415-555-1212"),
                StartDate: sdk.String("/Date(320284900000+0000)/"),
                Status: shared.EmployeeStatusEnumActive.ToPointer(),
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumSuperincomestream.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumForeignresident.ToPointer(),
                    TFNExemptionType: shared.TFNExemptionTypeEnumUnder18.ToPointer(),
                    TaxFileNumber: sdk.String("123123123"),
                    TaxFreeThresholdClaimed: sdk.Bool(false),
                    TaxOffsetEstimatedAmount: sdk.Float64(100),
                    UpwardVariationTaxWithholdingAmount: sdk.Float64(50),
                },
                TerminationDate: sdk.String("/Date(1584662400000+0000)/"),
                Title: sdk.String("Mrs"),
                TwitterUserName: sdk.String("xeroapi"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("quod"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("odio"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("similique"),
                    },
                },
            },
            shared.EmployeeInput{
                BankAccounts: []shared.BankAccount{
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                    shared.BankAccount{
                        AccountName: sdk.String("James Lebron Savings"),
                        AccountNumber: sdk.String("345678"),
                        Amount: sdk.Float64(200),
                        Bsb: sdk.String("122344"),
                        Remainder: sdk.Bool(false),
                        StatementText: sdk.String("Salary"),
                    },
                },
                Classification: sdk.String("99383"),
                DateOfBirth: "/Date(322560000000+0000)/",
                Email: sdk.String("developer@me.com"),
                EmployeeGroupName: sdk.String("marketing"),
                EmployeeID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
                FirstName: "Karen",
                Gender: shared.EmployeeGenderEnumF.ToPointer(),
                HomeAddress: &shared.HomeAddress{
                    AddressLine1: "123 Main St",
                    AddressLine2: sdk.String("Apt 4"),
                    City: sdk.String("St. Kilda"),
                    Country: sdk.String("AUSTRALIA"),
                    PostalCode: sdk.String("3182"),
                    Region: shared.StateEnumVic.ToPointer(),
                },
                IsAuthorisedToApproveLeave: sdk.Bool(false),
                IsAuthorisedToApproveTimesheets: sdk.Bool(true),
                JobTitle: sdk.String("Manager"),
                LastName: "Jones",
                LeaveBalances: []shared.LeaveBalance{
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                    shared.LeaveBalance{
                        LeaveName: sdk.String("Annual Leave"),
                        LeaveTypeID: sdk.String("544d9292-4329-4512-bfff-a9f15236d776"),
                        NumberOfUnits: sdk.Float64(81.2602),
                        TypeOfUnits: sdk.String("Hours"),
                    },
                },
                LeaveLines: []shared.LeaveLine{
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                    shared.LeaveLine{
                        AnnualNumberOfUnits: sdk.Float64(2.5),
                        CalculationType: shared.LeaveLineCalculationTypeEnumNocalculationrequired.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                        EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                        FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                        IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                        LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                        NumberOfUnits: sdk.Float64(2.5),
                    },
                },
                MiddleNames: sdk.String("Adena"),
                Mobile: sdk.String("415-234-5678"),
                OpeningBalances: &shared.OpeningBalances{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    OpeningBalanceDate: sdk.String("/Date(322560000000+0000)/"),
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSalarysacrifice.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                    Tax: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                },
                OrdinaryEarningsRateID: sdk.String("5gj1e5cc-9835-40d5-bb18-09fdb118db9c"),
                PayTemplate: &shared.PayTemplate{
                    DeductionLines: []shared.DeductionLine{
                        shared.DeductionLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                            DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                            NumberOfUnits: sdk.Float64(10),
                            Percentage: sdk.Float64(10),
                        },
                    },
                    EarningsLines: []shared.EarningsLine{
                        shared.EarningsLine{
                            Amount: sdk.Float64(38),
                            AnnualSalary: sdk.Float64(40000),
                            CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                            EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                            FixedAmount: sdk.Float64(2.5),
                            NormalNumberOfUnits: sdk.Float64(38),
                            NumberOfUnits: sdk.Float64(2.5),
                            NumberOfUnitsPerWeek: sdk.Float64(38),
                            RatePerUnit: sdk.Float64(38),
                        },
                    },
                    LeaveLines: []shared.LeaveLine{
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumEnterrateinpaytemplate.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                    },
                    ReimbursementLines: []shared.ReimbursementLine{
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                        shared.ReimbursementLine{
                            Amount: sdk.Float64(10),
                            Description: sdk.String("For the taxi"),
                            ExpenseAccount: sdk.String("420"),
                            ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                        },
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
                    },
                },
                PayrollCalendarID: sdk.String("2ee8e5cc-9835-40d5-bb18-09fdb118db9c"),
                Phone: sdk.String("415-555-1212"),
                StartDate: sdk.String("/Date(320284900000+0000)/"),
                Status: shared.EmployeeStatusEnumActive.ToPointer(),
                SuperMemberships: []shared.SuperMembership{
                    shared.SuperMembership{
                        EmployeeNumber: "1234",
                        SuperFundID: "2187a42b-639a-45cb-9eed-cd4ae488306a",
                        SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                    },
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumSuperincomestream.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumWorkingholidaymaker.ToPointer(),
                    TFNExemptionType: shared.TFNExemptionTypeEnumNotquoted.ToPointer(),
                    TaxFileNumber: sdk.String("123123123"),
                    TaxFreeThresholdClaimed: sdk.Bool(false),
                    TaxOffsetEstimatedAmount: sdk.Float64(100),
                    UpwardVariationTaxWithholdingAmount: sdk.Float64(50),
                },
                TerminationDate: sdk.String("/Date(1584662400000+0000)/"),
                Title: sdk.String("Mrs"),
                TwitterUserName: sdk.String("xeroapi"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("deleniti"),
                    },
                },
            },
        },
        XeroTenantID: "impedit",
    }, operations.UpdateEmployeeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employees != nil {
        // handle response
    }
}
```

## UpdateLeaveApplication

Updates a specific leave application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdateLeaveApplication(ctx, operations.UpdateLeaveApplicationRequest{
        LeaveApplicationID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        RequestBody: []shared.LeaveApplicationInput{
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumProcessed.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("non"),
                    },
                },
            },
            shared.LeaveApplicationInput{
                Description: sdk.String("My leave"),
                EmployeeID: sdk.String("fb4ebd68-6568-41eb-96ab-628a0f54b4b8"),
                EndDate: sdk.String("/Date(322560000000+0000)/"),
                LeaveApplicationID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                LeavePeriods: []shared.LeavePeriod{
                    shared.LeavePeriod{
                        LeavePeriodStatus: shared.LeavePeriodStatusEnumProcessed.ToPointer(),
                        NumberOfUnits: sdk.Float64(22.8),
                        PayPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                        PayPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                    },
                },
                LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                StartDate: sdk.String("/Date(322560000000+0000)/"),
                Title: sdk.String("Annual Leave"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("placeat"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("velit"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("eum"),
                    },
                },
            },
        },
        XeroTenantID: "autem",
    }, operations.UpdateLeaveApplicationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaveApplications != nil {
        // handle response
    }
}
```

## UpdatePayRun

Update properties on a single PayRun

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdatePayRun(ctx, operations.UpdatePayRunRequest{
        PayRunID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        RequestBody: []shared.PayRunInput{
            shared.PayRunInput{
                Deductions: sdk.Float64(5573.69),
                NetPay: sdk.Float64(862.5),
                PayRunID: sdk.String("bba1d10f-63b1-4692-b5c5-a99f869523a4"),
                PayRunPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunStatus: shared.PayRunStatusEnumPosted.ToPointer(),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
                PayslipMessage: sdk.String("Thanks for being awesome"),
                Payslips: []shared.PayslipSummaryInput{
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(3790.34),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(7270.44),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(965.49),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(2703.28),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(2561.39),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(1314.82),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(5919.35),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(553.74),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                },
                Reimbursement: sdk.Float64(4764.77),
                Super: sdk.Float64(75.6),
                Tax: sdk.Float64(198),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("odio"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("eius"),
                    },
                },
                Wages: sdk.Float64(1060.5),
            },
            shared.PayRunInput{
                Deductions: sdk.Float64(4585.15),
                NetPay: sdk.Float64(862.5),
                PayRunID: sdk.String("bba1d10f-63b1-4692-b5c5-a99f869523a4"),
                PayRunPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunStatus: shared.PayRunStatusEnumDraft.ToPointer(),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
                PayslipMessage: sdk.String("Thanks for being awesome"),
                Payslips: []shared.PayslipSummaryInput{
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(6832.82),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(4420.15),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(6956.26),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(8526.35),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(2835.19),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(4334.39),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                },
                Reimbursement: sdk.Float64(3799.27),
                Super: sdk.Float64(75.6),
                Tax: sdk.Float64(198),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("eos"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("praesentium"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("quisquam"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("veritatis"),
                    },
                },
                Wages: sdk.Float64(1060.5),
            },
            shared.PayRunInput{
                Deductions: sdk.Float64(568.48),
                NetPay: sdk.Float64(862.5),
                PayRunID: sdk.String("bba1d10f-63b1-4692-b5c5-a99f869523a4"),
                PayRunPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunStatus: shared.PayRunStatusEnumPosted.ToPointer(),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
                PayslipMessage: sdk.String("Thanks for being awesome"),
                Payslips: []shared.PayslipSummaryInput{
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(2065.94),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(7786.96),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(8472.76),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(7774.08),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(6813.59),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(2594.22),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                },
                Reimbursement: sdk.Float64(1783.67),
                Super: sdk.Float64(75.6),
                Tax: sdk.Float64(198),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("ab"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("cupiditate"),
                    },
                },
                Wages: sdk.Float64(1060.5),
            },
            shared.PayRunInput{
                Deductions: sdk.Float64(96.88),
                NetPay: sdk.Float64(862.5),
                PayRunID: sdk.String("bba1d10f-63b1-4692-b5c5-a99f869523a4"),
                PayRunPeriodEndDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunPeriodStartDate: sdk.String("/Date(322560000000+0000)/"),
                PayRunStatus: shared.PayRunStatusEnumDraft.ToPointer(),
                PaymentDate: sdk.String("/Date(322560000000+0000)/"),
                PayrollCalendarID: "bfac31bd-ea62-4fc8-a5e7-7965d9504b15",
                PayslipMessage: sdk.String("Thanks for being awesome"),
                Payslips: []shared.PayslipSummaryInput{
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(3708.53),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(1334.65),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(1970.54),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(7791.92),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(4598.56),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(9251.64),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                    shared.PayslipSummaryInput{
                        Deductions: sdk.Float64(446.12),
                        EmployeeGroup: sdk.String("Marketing"),
                        EmployeeID: sdk.String("4729f087-8eec-49c1-8294-4d11a5a0a37c"),
                        FirstName: sdk.String("Karen"),
                        LastName: sdk.String("Jones"),
                        NetPay: sdk.Float64(862.5),
                        PayslipID: sdk.String("f3c0874d-7cdd-459a-a95c-d90d51decc42"),
                        Reimbursements: sdk.Float64(7151.79),
                        Super: sdk.Float64(75.6),
                        Tax: sdk.Float64(198),
                        Wages: sdk.Float64(1060.5),
                    },
                },
                Reimbursement: sdk.Float64(7997.96),
                Super: sdk.Float64(75.6),
                Tax: sdk.Float64(198),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("inventore"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("nihil"),
                    },
                },
                Wages: sdk.Float64(1060.5),
            },
        },
        XeroTenantID: "totam",
    }, operations.UpdatePayRunSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRuns != nil {
        // handle response
    }
}
```

## UpdatePayslip

Update lines on a single payslips

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdatePayslip(ctx, operations.UpdatePayslipRequest{
        PayslipID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        RequestBody: []shared.PayslipLines{
            shared.PayslipLines{
                DeductionLines: []shared.DeductionLine{
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                },
                EarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                LeaveAccrualLines: []shared.LeaveAccrualLine{
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                },
                LeaveEarningsLines: []shared.LeaveEarningsLine{
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                ReimbursementLines: []shared.ReimbursementLine{
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                },
                SuperannuationLines: []shared.SuperannuationLine{
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                },
                TaxLines: []shared.TaxLine{
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("atque"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumPaygmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("minima"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumEtpomanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                },
                TimesheetEarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
            },
            shared.PayslipLines{
                DeductionLines: []shared.DeductionLine{
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                },
                EarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                LeaveAccrualLines: []shared.LeaveAccrualLine{
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                },
                LeaveEarningsLines: []shared.LeaveEarningsLine{
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                ReimbursementLines: []shared.ReimbursementLine{
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                },
                SuperannuationLines: []shared.SuperannuationLine{
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumFixedamount.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumSalarysacrifice.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                },
                TaxLines: []shared.TaxLine{
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("nam"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumSchedule5Stslmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("aliquid"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumPaygmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("saepe"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumEtprmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("harum"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumEtprmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                },
                TimesheetEarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
            },
            shared.PayslipLines{
                DeductionLines: []shared.DeductionLine{
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumPosttax,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumFixedamount,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                },
                EarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                LeaveAccrualLines: []shared.LeaveAccrualLine{
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                },
                LeaveEarningsLines: []shared.LeaveEarningsLine{
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                ReimbursementLines: []shared.ReimbursementLine{
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                },
                SuperannuationLines: []shared.SuperannuationLine{
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumPercentageofearnings.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                },
                TaxLines: []shared.TaxLine{
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("error"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumEtprmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("pariatur"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumSchedule5Stslmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("quia"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumSchedule5Stslmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("asperiores"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumSchedule5Stslmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                },
                TimesheetEarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
            },
            shared.PayslipLines{
                DeductionLines: []shared.DeductionLine{
                    shared.DeductionLine{
                        Amount: sdk.Float64(10),
                        CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
                        DeductionTypeID: "59cd9d04-4521-4cc3-93ac-7841651ff407",
                        NumberOfUnits: sdk.Float64(10),
                        Percentage: sdk.Float64(10),
                    },
                },
                EarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumAnnualsalary.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                LeaveAccrualLines: []shared.LeaveAccrualLine{
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                    shared.LeaveAccrualLine{
                        AutoCalculate: sdk.Bool(true),
                        LeaveTypeID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(105.5),
                    },
                },
                LeaveEarningsLines: []shared.LeaveEarningsLine{
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.LeaveEarningsLine{
                        EarningsRateID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        NumberOfUnits: sdk.Float64(2.5),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
                ReimbursementLines: []shared.ReimbursementLine{
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                    shared.ReimbursementLine{
                        Amount: sdk.Float64(10),
                        Description: sdk.String("For the taxi"),
                        ExpenseAccount: sdk.String("420"),
                        ReimbursementTypeID: sdk.String("bd246b96-c637-4767-81cf-851ba8fa93c2"),
                    },
                },
                SuperannuationLines: []shared.SuperannuationLine{
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                    shared.SuperannuationLine{
                        Amount: sdk.Float64(10.5),
                        CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                        ContributionType: shared.SuperannuationContributionTypeEnumSgc.ToPointer(),
                        ExpenseAccountCode: sdk.String("450"),
                        LiabilityAccountCode: sdk.String("650"),
                        MinimumMonthlyEarnings: sdk.Float64(100.5),
                        PaymentDateForThisPeriod: sdk.String("/Date(322560000000+0000)/"),
                        Percentage: sdk.Float64(4),
                        SuperMembershipID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                    },
                },
                TaxLines: []shared.TaxLine{
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("sapiente"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumPaygmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                    shared.TaxLine{
                        Amount: sdk.Float64(50),
                        Description: sdk.String("ullam"),
                        LiabilityAccount: sdk.String("620"),
                        ManualTaxType: shared.ManualTaxTypeEnumEtprmanual.ToPointer(),
                        PayslipTaxLineID: sdk.String("e0eb6747-7c17-4075-b804-989f8d4e5d39"),
                        TaxTypeName: sdk.String("Manual Adjustment"),
                    },
                },
                TimesheetEarningsLines: []shared.EarningsLine{
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumEnterearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                    shared.EarningsLine{
                        Amount: sdk.Float64(38),
                        AnnualSalary: sdk.Float64(40000),
                        CalculationType: shared.EarningsRateCalculationTypeEnumUseearningsrate.ToPointer(),
                        EarningsRateID: "72e962d1-fcac-4083-8a71-742bb3e7ae14",
                        FixedAmount: sdk.Float64(2.5),
                        NormalNumberOfUnits: sdk.Float64(38),
                        NumberOfUnits: sdk.Float64(2.5),
                        NumberOfUnitsPerWeek: sdk.Float64(38),
                        RatePerUnit: sdk.Float64(38),
                    },
                },
            },
        },
        XeroTenantID: "voluptatum",
    }, operations.UpdatePayslipSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Payslips != nil {
        // handle response
    }
}
```

## UpdateSuperfund

Update properties on a single Superfund

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdateSuperfund(ctx, operations.UpdateSuperfundRequest{
        RequestBody: []shared.SuperFundInput{
            shared.SuperFundInput{
                Abn: sdk.String("40022701955"),
                AccountName: sdk.String("Money account"),
                AccountNumber: sdk.String("234234234"),
                Bsb: sdk.String("234324"),
                ElectronicServiceAddress: sdk.String("12345678"),
                EmployerNumber: sdk.String("324324"),
                Name: sdk.String("MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)"),
                Spin: sdk.String("4545445454"),
                SuperFundID: sdk.String("bfac31bd-ea62-4fc8-a5e7-7965d9504b15"),
                Type: shared.SuperFundTypeEnumSmsf,
                Usi: sdk.String("40022701955001"),
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("deleniti"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("itaque"),
                    },
                },
            },
        },
        SuperFundID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "dolorum",
    }, operations.UpdateSuperfundSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperFunds != nil {
        // handle response
    }
}
```

## UpdateTimesheet

Update properties on a single timesheet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayrollAu.UpdateTimesheet(ctx, operations.UpdateTimesheetRequest{
        RequestBody: []shared.TimesheetInput{
            shared.TimesheetInput{
                EmployeeID: "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b",
                EndDate: "/Date(322560000000+0000)/",
                Hours: sdk.Float64(31),
                StartDate: "/Date(322560000000+0000)/",
                Status: shared.TimesheetStatusEnumRejected.ToPointer(),
                TimesheetID: sdk.String("049765fc-4506-48fb-bf88-3578dec0ec47"),
                TimesheetLines: []shared.TimesheetLineInput{
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                            3,
                            3,
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                    shared.TimesheetLineInput{
                        EarningsRateID: sdk.String("966c5c77-2ef0-4320-b6a9-6c27b080ecc5"),
                        NumberOfUnits: []float64{
                            3,
                            3,
                        },
                        TrackingItemID: sdk.String("ae777a87-5ef3-4fa0-a4f0-d10e1f13073a"),
                    },
                },
                ValidationErrors: []shared.ValidationError{
                    shared.ValidationError{
                        Message: sdk.String("minima"),
                    },
                },
            },
        },
        TimesheetID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "veritatis",
    }, operations.UpdateTimesheetSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Timesheets != nil {
        // handle response
    }
}
```
