# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateEmployeeSecurity;
import org.openapis.openapi.models.operations.CreateEmployeeRequest;
import org.openapis.openapi.models.operations.CreateEmployeeResponse;
import org.openapis.openapi.models.shared.EmployeeGenderEnum;
import org.openapis.openapi.models.shared.EmployeeInput;
import org.openapis.openapi.models.shared.ValidationError;
import org.openapis.openapi.models.shared.TaxDeclarationInput;
import org.openapis.openapi.models.shared.TFNExemptionTypeEnum;
import org.openapis.openapi.models.shared.ResidencyStatusEnum;
import org.openapis.openapi.models.shared.EmploymentBasisEnum;
import org.openapis.openapi.models.shared.SuperMembership;
import org.openapis.openapi.models.shared.EmployeeStatusEnum;
import org.openapis.openapi.models.shared.PayTemplate;
import org.openapis.openapi.models.shared.SuperLine;
import org.openapis.openapi.models.shared.SuperannuationContributionTypeEnum;
import org.openapis.openapi.models.shared.SuperannuationCalculationTypeEnum;
import org.openapis.openapi.models.shared.ReimbursementLine;
import org.openapis.openapi.models.shared.LeaveLine;
import org.openapis.openapi.models.shared.EntitlementFinalPayPayoutTypeEnum;
import org.openapis.openapi.models.shared.EmploymentTerminationPaymentTypeEnum;
import org.openapis.openapi.models.shared.LeaveLineCalculationTypeEnum;
import org.openapis.openapi.models.shared.EarningsLine;
import org.openapis.openapi.models.shared.EarningsRateCalculationTypeEnum;
import org.openapis.openapi.models.shared.DeductionLine;
import org.openapis.openapi.models.shared.DeductionTypeCalculationTypeEnum;
import org.openapis.openapi.models.shared.OpeningBalances;
import org.openapis.openapi.models.shared.LeaveBalance;
import org.openapis.openapi.models.shared.HomeAddress;
import org.openapis.openapi.models.shared.StateEnum;
import org.openapis.openapi.models.shared.BankAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEmployeeRequest req = new CreateEmployeeRequest() {{
                requestBody = new org.openapis.openapi.models.shared.EmployeeInput[]{{
                    add(new EmployeeInput() {{
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
                        gender = "F";
                        homeAddress = new HomeAddress() {{
                            addressLine1 = "123 Main St";
                            addressLine2 = "Apt 4";
                            city = "St. Kilda";
                            country = "AUSTRALIA";
                            postalCode = "3182";
                            region = "VIC";
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
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "FIXEDAMOUNTEACHPERIOD";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "POSTTAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
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
                                    calculationType = "";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "NOCALCULATIONREQUIRED";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "FIXEDAMOUNTEACHPERIOD";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "BASEDONORDINARYEARNINGS";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
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
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "EMPLOYEE";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "STATUTORY";
                                    contributionType = "SALARYSACRIFICE";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "EMPLOYEE";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "STATUTORY";
                                    contributionType = "SGC";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ANNUALSALARY";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ANNUALSALARY";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
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
                                    calculationType = "ENTERRATEINPAYTEMPLATE";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
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
                                    calculationType = "STATUTORY";
                                    contributionType = "SALARYSACRIFICE";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "SGC";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "EMPLOYERADDITIONAL";
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
                        status = "ACTIVE";
                        superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
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
                            employmentBasis = "PARTTIME";
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = "FOREIGNRESIDENT";
                            tfnExemptionType = "PENDING";
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
                    add(new EmployeeInput() {{
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
                        gender = "F";
                        homeAddress = new HomeAddress() {{
                            addressLine1 = "123 Main St";
                            addressLine2 = "Apt 4";
                            city = "St. Kilda";
                            country = "AUSTRALIA";
                            postalCode = "3182";
                            region = "VIC";
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
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "FIXEDAMOUNTEACHPERIOD";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "PAIDOUT";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "USEEARNINGSRATE";
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
                                    calculationType = "BASEDONORDINARYEARNINGS";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "NOCALCULATIONREQUIRED";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
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
                                    calculationType = "STATUTORY";
                                    contributionType = "EMPLOYERADDITIONAL";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
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
                                    calculationType = "FIXEDAMOUNTEACHPERIOD";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
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
                            }};
                            superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "EMPLOYEE";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "EMPLOYEE";
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
                        status = "ACTIVE";
                        superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
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
                            employmentBasis = "SUPERINCOMESTREAM";
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = "AUSTRALIANRESIDENT";
                            tfnExemptionType = "NOTQUOTED";
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
                                message = "temporibus";
                            }}),
                            add(new ValidationError() {{
                                message = "laborum";
                            }}),
                            add(new ValidationError() {{
                                message = "quasi";
                            }}),
                        }};
                    }}),
                    add(new EmployeeInput() {{
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
                        gender = "F";
                        homeAddress = new HomeAddress() {{
                            addressLine1 = "123 Main St";
                            addressLine2 = "Apt 4";
                            city = "St. Kilda";
                            country = "AUSTRALIA";
                            postalCode = "3182";
                            region = "VIC";
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
                                calculationType = "ENTERRATEINPAYTEMPLATE";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "NOCALCULATIONREQUIRED";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 2.5;
                                calculationType = "ENTERRATEINPAYTEMPLATE";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "PAIDOUT";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "USEEARNINGSRATE";
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
                                    calculationType = "FIXEDAMOUNTEACHPERIOD";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "BASEDONORDINARYEARNINGS";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
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
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "STATUTORY";
                                    contributionType = "SGC";
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
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "POSTTAX";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 10;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                    numberOfUnits = 10;
                                    percentage = 10;
                                }}),
                            }};
                            earningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                    fixedAmount = 2.5;
                                    normalNumberOfUnits = 38;
                                    numberOfUnits = 2.5;
                                    numberOfUnitsPerWeek = 38;
                                    ratePerUnit = 38;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38;
                                    annualSalary = 40000;
                                    calculationType = "ANNUALSALARY";
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
                                    calculationType = "NOCALCULATIONREQUIRED";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "NOCALCULATIONREQUIRED";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 2.5;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    numberOfUnits = 2.5;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 2.5;
                                    calculationType = "ENTERRATEINPAYTEMPLATE";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
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
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "SGC";
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = "STATUTORY";
                                    contributionType = "EMPLOYERADDITIONAL";
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
                        status = "ACTIVE";
                        superMemberships = new org.openapis.openapi.models.shared.SuperMembership[]{{
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "1234";
                                superFundID = "2187a42b-639a-45cb-9eed-cd4ae488306a";
                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                            }}),
                            add(new SuperMembership() {{
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
                            employmentBasis = "LABOURHIRE";
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = "AUSTRALIANRESIDENT";
                            tfnExemptionType = "UNDER18";
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
                }};
                xeroTenantId = "sint";
            }}            

            CreateEmployeeResponse res = sdk.payrollAu.createEmployee(req, new CreateEmployeeSecurity() {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.employees.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
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
