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
                },
                LeaveLines: []shared.LeaveLine{
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
                        CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
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
                            CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumNocalculationrequired.ToPointer(),
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
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployee.ToPointer(),
                            ExpenseAccountCode: sdk.String("478"),
                            LiabilityAccountCode: sdk.String("826"),
                            MinimumMonthlyEarnings: sdk.Float64(450),
                            Percentage: sdk.Float64(9),
                            SuperMembershipID: sdk.String("4333d5cd-53a5-4c31-98e5-a8b4e5676b0b"),
                        },
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
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
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
                    },
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
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumParttime.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumForeignresident.ToPointer(),
                    TFNExemptionType: shared.TFNExemptionTypeEnumPending.ToPointer(),
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
                        Message: sdk.String("saepe"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("fuga"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("in"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("corporis"),
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
                },
                LeaveLines: []shared.LeaveLine{
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
                        CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                        EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
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
                            CalculationType: shared.LeaveLineCalculationTypeEnumBasedonordinaryearnings.ToPointer(),
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
                    },
                    SuperLines: []shared.SuperLine{
                        shared.SuperLine{
                            Amount: sdk.Float64(10),
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
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
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
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
                    ResidencyStatus: shared.ResidencyStatusEnumAustralianresident.ToPointer(),
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
                        Message: sdk.String("temporibus"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("laborum"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("quasi"),
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
                            CalculationType: shared.LeaveLineCalculationTypeEnumFixedamounteachperiod.ToPointer(),
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
                            CalculationType: shared.SuperannuationCalculationTypeEnumStatutory.ToPointer(),
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
                            CalculationType: shared.DeductionTypeCalculationTypeEnumPretax,
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
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumR.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumPaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
                        shared.LeaveLine{
                            AnnualNumberOfUnits: sdk.Float64(2.5),
                            CalculationType: shared.LeaveLineCalculationTypeEnumUnknown.ToPointer(),
                            EmploymentTerminationPaymentType: shared.EmploymentTerminationPaymentTypeEnumO.ToPointer(),
                            EntitlementFinalPayPayoutType: shared.EntitlementFinalPayPayoutTypeEnumNotpaidout.ToPointer(),
                            FullTimeNumberOfUnitsPerPeriod: sdk.Float64(2.5),
                            IncludeSuperannuationGuaranteeContribution: sdk.Bool(true),
                            LeaveTypeID: sdk.String("742998cb-7584-4ecf-aa88-d694f59c50f9"),
                            NumberOfUnits: sdk.Float64(2.5),
                        },
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
                            ContributionType: shared.SuperannuationContributionTypeEnumEmployeradditional.ToPointer(),
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
                },
                TaxDeclaration: &shared.TaxDeclarationInput{
                    ApprovedWithholdingVariationPercentage: sdk.Float64(75),
                    AustralianResidentForTaxPurposes: sdk.Bool(true),
                    EligibleToReceiveLeaveLoading: sdk.Bool(false),
                    EmployeeID: sdk.String("123 Main St"),
                    EmploymentBasis: shared.EmploymentBasisEnumLabourhire.ToPointer(),
                    HasHELPDebt: sdk.Bool(false),
                    HasSFSSDebt: sdk.Bool(false),
                    HasStudentStartupLoan: sdk.Bool(true),
                    HasTradeSupportLoanDebt: sdk.Bool(false),
                    ResidencyStatus: shared.ResidencyStatusEnumAustralianresident.ToPointer(),
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
                        Message: sdk.String("non"),
                    },
                    shared.ValidationError{
                        Message: sdk.String("eligendi"),
                    },
                },
            },
        },
        XeroTenantID: "sint",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PayrollAu](docs/payrollau/README.md)

* [CreateEmployee](docs/payrollau/README.md#createemployee) - Creates a payroll employee
* [CreateLeaveApplication](docs/payrollau/README.md#createleaveapplication) - Creates a leave application
* [CreatePayItem](docs/payrollau/README.md#createpayitem) - Creates a pay item
* [CreatePayRun](docs/payrollau/README.md#createpayrun) - Creates a pay run
* [CreatePayrollCalendar](docs/payrollau/README.md#createpayrollcalendar) - Creates a Payroll Calendar
* [CreateSuperfund](docs/payrollau/README.md#createsuperfund) - Creates a superfund
* [CreateTimesheet](docs/payrollau/README.md#createtimesheet) - Creates a timesheet
* [GetEmployee](docs/payrollau/README.md#getemployee) - Retrieves an employee's detail by unique employee id
* [GetEmployees](docs/payrollau/README.md#getemployees) - Searches payroll employees
* [GetLeaveApplication](docs/payrollau/README.md#getleaveapplication) - Retrieves a leave application by a unique leave application id
* [GetLeaveApplications](docs/payrollau/README.md#getleaveapplications) - Retrieves leave applications
* [GetPayItems](docs/payrollau/README.md#getpayitems) - Retrieves pay items
* [GetPayRun](docs/payrollau/README.md#getpayrun) - Retrieves a pay run by using a unique pay run id
* [GetPayRuns](docs/payrollau/README.md#getpayruns) - Retrieves pay runs
* [GetPayrollCalendar](docs/payrollau/README.md#getpayrollcalendar) - Retrieves payroll calendar by using a unique payroll calendar ID
* [GetPayrollCalendars](docs/payrollau/README.md#getpayrollcalendars) - Retrieves payroll calendars
* [GetPayslip](docs/payrollau/README.md#getpayslip) - Retrieves for a payslip by a unique payslip id
* [GetSettings](docs/payrollau/README.md#getsettings) - Retrieves payroll settings
* [GetSuperfund](docs/payrollau/README.md#getsuperfund) - Retrieves a superfund by using a unique superfund ID
* [GetSuperfundProducts](docs/payrollau/README.md#getsuperfundproducts) - Retrieves superfund products
* [GetSuperfunds](docs/payrollau/README.md#getsuperfunds) - Retrieves superfunds
* [GetTimesheet](docs/payrollau/README.md#gettimesheet) - Retrieves a timesheet by using a unique timesheet id
* [GetTimesheets](docs/payrollau/README.md#gettimesheets) - Retrieves timesheets
* [UpdateEmployee](docs/payrollau/README.md#updateemployee) - Updates an employee's detail
* [UpdateLeaveApplication](docs/payrollau/README.md#updateleaveapplication) - Updates a specific leave application
* [UpdatePayRun](docs/payrollau/README.md#updatepayrun) - Updates a pay run
* [UpdatePayslip](docs/payrollau/README.md#updatepayslip) - Updates a payslip
* [UpdateSuperfund](docs/payrollau/README.md#updatesuperfund) - Updates a superfund
* [UpdateTimesheet](docs/payrollau/README.md#updatetimesheet) - Updates a timesheet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
