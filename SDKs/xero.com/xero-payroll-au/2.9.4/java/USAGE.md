<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmployeeRequest;
import org.openapis.openapi.models.operations.CreateEmployeeResponse;
import org.openapis.openapi.models.operations.CreateEmployeeSecurity;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.DeductionLine;
import org.openapis.openapi.models.shared.DeductionTypeCalculationTypeEnum;
import org.openapis.openapi.models.shared.EarningsLine;
import org.openapis.openapi.models.shared.EarningsRateCalculationTypeEnum;
import org.openapis.openapi.models.shared.EmployeeGenderEnum;
import org.openapis.openapi.models.shared.EmployeeInput;
import org.openapis.openapi.models.shared.EmployeeStatusEnum;
import org.openapis.openapi.models.shared.EmploymentBasisEnum;
import org.openapis.openapi.models.shared.EmploymentTerminationPaymentTypeEnum;
import org.openapis.openapi.models.shared.EntitlementFinalPayPayoutTypeEnum;
import org.openapis.openapi.models.shared.HomeAddress;
import org.openapis.openapi.models.shared.LeaveBalance;
import org.openapis.openapi.models.shared.LeaveLine;
import org.openapis.openapi.models.shared.LeaveLineCalculationTypeEnum;
import org.openapis.openapi.models.shared.OpeningBalances;
import org.openapis.openapi.models.shared.PayTemplate;
import org.openapis.openapi.models.shared.ReimbursementLine;
import org.openapis.openapi.models.shared.ResidencyStatusEnum;
import org.openapis.openapi.models.shared.StateEnum;
import org.openapis.openapi.models.shared.SuperLine;
import org.openapis.openapi.models.shared.SuperMembership;
import org.openapis.openapi.models.shared.SuperannuationCalculationTypeEnum;
import org.openapis.openapi.models.shared.SuperannuationContributionTypeEnum;
import org.openapis.openapi.models.shared.TFNExemptionTypeEnum;
import org.openapis.openapi.models.shared.TaxDeclarationInput;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEmployeeRequest req = new CreateEmployeeRequest(                new org.openapis.openapi.models.shared.EmployeeInput[]{{
                                add(new EmployeeInput("/Date(322560000000+0000)/", "Karen", "Jones") {{
                                    bankAccounts = new org.openapis.openapi.models.shared.BankAccount[]{{
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                    }};
                                    classification = "99383";
                                    dateOfBirth = "/Date(322560000000+0000)/";
                                    email = "developer@me.com";
                                    employeeGroupName = "marketing";
                                    employeeID = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    firstName = "Karen";
                                    gender = EmployeeGenderEnum.F;
                                    homeAddress = new HomeAddress("123 Main St") {{
                                        addressLine1 = "123 Main St";
                                        addressLine2 = "Apt 4";
                                        city = "St. Kilda";
                                        country = "AUSTRALIA";
                                        postalCode = "3182";
                                        region = StateEnum.VIC;
                                    }};
                                    isAuthorisedToApproveLeave = false;
                                    isAuthorisedToApproveTimesheets = true;
                                    jobTitle = "Manager";
                                    lastName = "Jones";
                                    leaveBalances = new org.openapis.openapi.models.shared.LeaveBalance[]{{
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                    }};
                                    leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                    }};
                                    middleNames = "Adena";
                                    mobile = "415-234-5678";
                                    openingBalances = new OpeningBalances() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        openingBalanceDate = "/Date(322560000000+0000)/";
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                        tax = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                    }};
                                    ordinaryEarningsRateID = "5gj1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    payTemplate = new PayTemplate() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ENTEREARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.NOCALCULATIONREQUIRED;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                                contributionType = SuperannuationContributionTypeEnum.SALARYSACRIFICE;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                    }};
                                    payrollCalendarID = "2ee8e5cc-9835-40d5-bb18-09fdb118db9c";
                                    phone = "415-555-1212";
                                    startDate = "/Date(320284900000+0000)/";
                                    status = EmployeeStatusEnum.ACTIVE;
                                    superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                    }};
                                    taxDeclaration = new TaxDeclarationInput() {{
                                        approvedWithholdingVariationPercentage = 75;
                                        australianResidentForTaxPurposes = true;
                                        eligibleToReceiveLeaveLoading = false;
                                        employeeID = "123 Main St";
                                        employmentBasis = EmploymentBasisEnum.PARTTIME;
                                        hasHELPDebt = false;
                                        hasSFSSDebt = false;
                                        hasStudentStartupLoan = true;
                                        hasTradeSupportLoanDebt = false;
                                        residencyStatus = ResidencyStatusEnum.FOREIGNRESIDENT;
                                        tfnExemptionType = TFNExemptionTypeEnum.PENDING;
                                        taxFileNumber = "123123123";
                                        taxFreeThresholdClaimed = false;
                                        taxOffsetEstimatedAmount = 100;
                                        upwardVariationTaxWithholdingAmount = 50;
                                    }};
                                    terminationDate = "/Date(1584662400000+0000)/";
                                    title = "Mrs";
                                    twitterUserName = "xeroapi";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "saepe";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "fuga";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "in";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "corporis";
                                        }}),
                                    }};
                                }}),
                                add(new EmployeeInput("/Date(322560000000+0000)/", "Karen", "Jones") {{
                                    bankAccounts = new org.openapis.openapi.models.shared.BankAccount[]{{
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                    }};
                                    classification = "99383";
                                    dateOfBirth = "/Date(322560000000+0000)/";
                                    email = "developer@me.com";
                                    employeeGroupName = "marketing";
                                    employeeID = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    firstName = "Karen";
                                    gender = EmployeeGenderEnum.F;
                                    homeAddress = new HomeAddress("123 Main St") {{
                                        addressLine1 = "123 Main St";
                                        addressLine2 = "Apt 4";
                                        city = "St. Kilda";
                                        country = "AUSTRALIA";
                                        postalCode = "3182";
                                        region = StateEnum.VIC;
                                    }};
                                    isAuthorisedToApproveLeave = false;
                                    isAuthorisedToApproveTimesheets = true;
                                    jobTitle = "Manager";
                                    lastName = "Jones";
                                    leaveBalances = new org.openapis.openapi.models.shared.LeaveBalance[]{{
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                    }};
                                    leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                    }};
                                    middleNames = "Adena";
                                    mobile = "415-234-5678";
                                    openingBalances = new OpeningBalances() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ENTEREARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.NOCALCULATIONREQUIRED;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        openingBalanceDate = "/Date(322560000000+0000)/";
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.SALARYSACRIFICE;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                        tax = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                    }};
                                    ordinaryEarningsRateID = "5gj1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    payTemplate = new PayTemplate() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.PRETAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                    }};
                                    payrollCalendarID = "2ee8e5cc-9835-40d5-bb18-09fdb118db9c";
                                    phone = "415-555-1212";
                                    startDate = "/Date(320284900000+0000)/";
                                    status = EmployeeStatusEnum.TERMINATED;
                                    superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                    }};
                                    taxDeclaration = new TaxDeclarationInput() {{
                                        approvedWithholdingVariationPercentage = 75;
                                        australianResidentForTaxPurposes = true;
                                        eligibleToReceiveLeaveLoading = false;
                                        employeeID = "123 Main St";
                                        employmentBasis = EmploymentBasisEnum.FULLTIME;
                                        hasHELPDebt = false;
                                        hasSFSSDebt = false;
                                        hasStudentStartupLoan = true;
                                        hasTradeSupportLoanDebt = false;
                                        residencyStatus = ResidencyStatusEnum.WORKINGHOLIDAYMAKER;
                                        tfnExemptionType = TFNExemptionTypeEnum.UNDER18;
                                        taxFileNumber = "123123123";
                                        taxFreeThresholdClaimed = false;
                                        taxOffsetEstimatedAmount = 100;
                                        upwardVariationTaxWithholdingAmount = 50;
                                    }};
                                    terminationDate = "/Date(1584662400000+0000)/";
                                    title = "Mrs";
                                    twitterUserName = "xeroapi";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "nihil";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "praesentium";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "voluptatibus";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "ipsa";
                                        }}),
                                    }};
                                }}),
                                add(new EmployeeInput("/Date(322560000000+0000)/", "Karen", "Jones") {{
                                    bankAccounts = new org.openapis.openapi.models.shared.BankAccount[]{{
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                        add(new BankAccount() {{
                                            accountName = "James Lebron Savings";
                                            accountNumber = "345678";
                                            amount = 200;
                                            bsb = "122344";
                                            remainder = false;
                                            statementText = "Salary";
                                        }}),
                                    }};
                                    classification = "99383";
                                    dateOfBirth = "/Date(322560000000+0000)/";
                                    email = "developer@me.com";
                                    employeeGroupName = "marketing";
                                    employeeID = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    firstName = "Karen";
                                    gender = EmployeeGenderEnum.F;
                                    homeAddress = new HomeAddress("123 Main St") {{
                                        addressLine1 = "123 Main St";
                                        addressLine2 = "Apt 4";
                                        city = "St. Kilda";
                                        country = "AUSTRALIA";
                                        postalCode = "3182";
                                        region = StateEnum.VIC;
                                    }};
                                    isAuthorisedToApproveLeave = false;
                                    isAuthorisedToApproveTimesheets = true;
                                    jobTitle = "Manager";
                                    lastName = "Jones";
                                    leaveBalances = new org.openapis.openapi.models.shared.LeaveBalance[]{{
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                        add(new LeaveBalance() {{
                                            leaveName = "Annual Leave";
                                            leaveTypeID = "544d9292-4329-4512-bfff-a9f15236d776";
                                            numberOfUnits = 81.2602;
                                            typeOfUnits = "Hours";
                                        }}),
                                    }};
                                    leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.NOCALCULATIONREQUIRED;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                        add(new LeaveLine() {{
                                            annualNumberOfUnits = 2.5;
                                            calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                            employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                            entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                            fullTimeNumberOfUnitsPerPeriod = 2.5;
                                            includeSuperannuationGuaranteeContribution = true;
                                            leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                            numberOfUnits = 2.5;
                                        }}),
                                    }};
                                    middleNames = "Adena";
                                    mobile = "415-234-5678";
                                    openingBalances = new OpeningBalances() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ENTEREARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        openingBalanceDate = "/Date(322560000000+0000)/";
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                                contributionType = SuperannuationContributionTypeEnum.SALARYSACRIFICE;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                        tax = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                    }};
                                    ordinaryEarningsRateID = "5gj1e5cc-9835-40d5-bb18-09fdb118db9c";
                                    payTemplate = new PayTemplate() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                                numberOfUnits = 10;
                                                percentage = 10;
                                            }}),
                                        }};
                                        earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.ANNUALSALARY;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                            add(new EarningsLine("72e962d1-fcac-4083-8a71-742bb3e7ae14") {{
                                                amount = 38;
                                                annualSalary = 40000;
                                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                                fixedAmount = 2.5;
                                                normalNumberOfUnits = 38;
                                                numberOfUnits = 2.5;
                                                numberOfUnitsPerWeek = 38;
                                                ratePerUnit = 38;
                                            }}),
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.NOCALCULATIONREQUIRED;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.PAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                            add(new LeaveLine() {{
                                                annualNumberOfUnits = 2.5;
                                                calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                                includeSuperannuationGuaranteeContribution = true;
                                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                                numberOfUnits = 2.5;
                                            }}),
                                        }};
                                        reimbursementLines = new org.openapis.openapi.models.shared.ReimbursementLine[]{{
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                            add(new ReimbursementLine() {{
                                                amount = 10;
                                                description = "For the taxi";
                                                expenseAccount = "420";
                                                reimbursementTypeID = "bd246b96-c637-4767-81cf-851ba8fa93c2";
                                            }}),
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                        }};
                                    }};
                                    payrollCalendarID = "2ee8e5cc-9835-40d5-bb18-09fdb118db9c";
                                    phone = "415-555-1212";
                                    startDate = "/Date(320284900000+0000)/";
                                    status = EmployeeStatusEnum.ACTIVE;
                                    superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                        add(new SuperMembership("1234", "2187a42b-639a-45cb-9eed-cd4ae488306a") {{
                                            employeeNumber = "1234";
                                            superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                            superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                        }}),
                                    }};
                                    taxDeclaration = new TaxDeclarationInput() {{
                                        approvedWithholdingVariationPercentage = 75;
                                        australianResidentForTaxPurposes = true;
                                        eligibleToReceiveLeaveLoading = false;
                                        employeeID = "123 Main St";
                                        employmentBasis = EmploymentBasisEnum.LABOURHIRE;
                                        hasHELPDebt = false;
                                        hasSFSSDebt = false;
                                        hasStudentStartupLoan = true;
                                        hasTradeSupportLoanDebt = false;
                                        residencyStatus = ResidencyStatusEnum.AUSTRALIANRESIDENT;
                                        tfnExemptionType = TFNExemptionTypeEnum.UNDER18;
                                        taxFileNumber = "123123123";
                                        taxFreeThresholdClaimed = false;
                                        taxOffsetEstimatedAmount = 100;
                                        upwardVariationTaxWithholdingAmount = 50;
                                    }};
                                    terminationDate = "/Date(1584662400000+0000)/";
                                    title = "Mrs";
                                    twitterUserName = "xeroapi";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "non";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "eligendi";
                                        }}),
                                    }};
                                }}),
                            }}, "sint");            

            CreateEmployeeResponse res = sdk.payrollAu.createEmployee(req, new CreateEmployeeSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.employees != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->