# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateEmployeeRequest req = new CreateEmployeeRequest() {{
                security = new CreateEmployeeSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateEmployeeHeaders() {{
                    xeroTenantId = "sit";
                }};
                request = new openapisdk.models.shared.EmployeeInput[]() {{
                    add(new EmployeeInput() {{
                        bankAccounts = new openapisdk.models.shared.BankAccount[]() {{
                            add(new BankAccount() {{
                                accountName = "expedita";
                                accountNumber = "consequuntur";
                                amount = 96.199997;
                                bsb = "voluptas";
                                remainder = true;
                                statementText = "et";
                            }}),
                            add(new BankAccount() {{
                                accountName = "nihil";
                                accountNumber = "rerum";
                                amount = 59.099998;
                                bsb = "voluptatum";
                                remainder = false;
                                statementText = "ut";
                            }}),
                        }};
                        classification = "dolorem";
                        dateOfBirth = "et";
                        email = "voluptate";
                        employeeGroupName = "iste";
                        employeeID = "vitae";
                        firstName = "totam";
                        gender = "N";
                        homeAddress = new HomeAddress() {{
                            addressLine1 = "illum";
                            addressLine2 = "debitis";
                            city = "vel";
                            country = "odio";
                            postalCode = "dolore";
                            region = "SA";
                        }};
                        isAuthorisedToApproveLeave = true;
                        isAuthorisedToApproveTimesheets = true;
                        jobTitle = "totam";
                        lastName = "commodi";
                        leaveBalances = new openapisdk.models.shared.LeaveBalance[]() {{
                            add(new LeaveBalance() {{
                                leaveName = "est";
                                leaveTypeID = "aut";
                                numberOfUnits = 10.200000;
                                typeOfUnits = "voluptas";
                            }}),
                            add(new LeaveBalance() {{
                                leaveName = "omnis";
                                leaveTypeID = "aut";
                                numberOfUnits = 76.099998;
                                typeOfUnits = "officiis";
                            }}),
                            add(new LeaveBalance() {{
                                leaveName = "autem";
                                leaveTypeID = "consectetur";
                                numberOfUnits = 0.100000;
                                typeOfUnits = "qui";
                            }}),
                        }};
                        leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 88.099998;
                                calculationType = "ENTERRATEINPAYTEMPLATE";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 77.099998;
                                includeSuperannuationGuaranteeContribution = false;
                                leaveTypeID = "aut";
                                numberOfUnits = 30.200001;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 97.099998;
                                calculationType = "";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 80.199997;
                                includeSuperannuationGuaranteeContribution = false;
                                leaveTypeID = "ipsum";
                                numberOfUnits = 66.099998;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 47.099998;
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "R";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 63.200001;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "qui";
                                numberOfUnits = 72.199997;
                            }}),
                        }};
                        middleNames = "autem";
                        mobile = "qui";
                        openingBalances = new OpeningBalances() {{
                            deductionLines = new openapisdk.models.shared.DeductionLine[]() {{
                                add(new DeductionLine() {{
                                    amount = 26.100000;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "ullam";
                                    numberOfUnits = 92.099998;
                                    percentage = 68.099998;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 38.200001;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "soluta";
                                    numberOfUnits = 41.200001;
                                    percentage = 89.199997;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 41.099998;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "illo";
                                    numberOfUnits = 6.100000;
                                    percentage = 82.099998;
                                }}),
                            }};
                            earningsLines = new openapisdk.models.shared.EarningsLine[]() {{
                                add(new EarningsLine() {{
                                    amount = 8.200000;
                                    annualSalary = 3.200000;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "laboriosam";
                                    fixedAmount = 80.199997;
                                    normalNumberOfUnits = 7.100000;
                                    numberOfUnits = 78.099998;
                                    numberOfUnitsPerWeek = 47.200001;
                                    ratePerUnit = 35.200001;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 20.200001;
                                    annualSalary = 26.200001;
                                    calculationType = "ANNUALSALARY";
                                    earningsRateID = "explicabo";
                                    fixedAmount = 42.099998;
                                    normalNumberOfUnits = 15.200000;
                                    numberOfUnits = 66.099998;
                                    numberOfUnitsPerWeek = 94.199997;
                                    ratePerUnit = 97.199997;
                                }}),
                            }};
                            leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 97.099998;
                                    calculationType = "BASEDONORDINARYEARNINGS";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 31.100000;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "vel";
                                    numberOfUnits = 87.099998;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 50.200001;
                                    calculationType = "ENTERRATEINPAYTEMPLATE";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 68.099998;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "vel";
                                    numberOfUnits = 91.099998;
                                }}),
                            }};
                            openingBalanceDate = "qui";
                            reimbursementLines = new openapisdk.models.shared.ReimbursementLine[]() {{
                                add(new ReimbursementLine() {{
                                    amount = 96.099998;
                                    description = "porro";
                                    expenseAccount = "rerum";
                                    reimbursementTypeID = "et";
                                }}),
                                add(new ReimbursementLine() {{
                                    amount = 96.099998;
                                    description = "laborum";
                                    expenseAccount = "rerum";
                                    reimbursementTypeID = "ut";
                                }}),
                            }};
                            superLines = new openapisdk.models.shared.SuperLine[]() {{
                                add(new SuperLine() {{
                                    amount = 92.199997;
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "SALARYSACRIFICE";
                                    expenseAccountCode = "aperiam";
                                    liabilityAccountCode = "consequuntur";
                                    minimumMonthlyEarnings = 54.099998;
                                    percentage = 70.199997;
                                    superMembershipID = "ipsa";
                                }}),
                                add(new SuperLine() {{
                                    amount = 20.100000;
                                    calculationType = "STATUTORY";
                                    contributionType = "SGC";
                                    expenseAccountCode = "fuga";
                                    liabilityAccountCode = "sed";
                                    minimumMonthlyEarnings = 83.099998;
                                    percentage = 30.100000;
                                    superMembershipID = "cupiditate";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10.200000;
                                    calculationType = "STATUTORY";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "corrupti";
                                    liabilityAccountCode = "enim";
                                    minimumMonthlyEarnings = 85.099998;
                                    percentage = 84.199997;
                                    superMembershipID = "neque";
                                }}),
                            }};
                            tax = "consequuntur";
                        }};
                        ordinaryEarningsRateID = "quia";
                        payTemplate = new PayTemplate() {{
                            deductionLines = new openapisdk.models.shared.DeductionLine[]() {{
                                add(new DeductionLine() {{
                                    amount = 28.100000;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "voluptatem";
                                    numberOfUnits = 20.200001;
                                    percentage = 73.099998;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 45.099998;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "in";
                                    numberOfUnits = 18.100000;
                                    percentage = 57.099998;
                                }}),
                            }};
                            earningsLines = new openapisdk.models.shared.EarningsLine[]() {{
                                add(new EarningsLine() {{
                                    amount = 99.199997;
                                    annualSalary = 50.099998;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "et";
                                    fixedAmount = 47.099998;
                                    normalNumberOfUnits = 3.200000;
                                    numberOfUnits = 58.200001;
                                    numberOfUnitsPerWeek = 69.199997;
                                    ratePerUnit = 66.199997;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 25.200001;
                                    annualSalary = 16.200001;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "ipsam";
                                    fixedAmount = 78.199997;
                                    normalNumberOfUnits = 46.099998;
                                    numberOfUnits = 84.099998;
                                    numberOfUnitsPerWeek = 67.099998;
                                    ratePerUnit = 26.200001;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 9.200000;
                                    annualSalary = 30.100000;
                                    calculationType = "ANNUALSALARY";
                                    earningsRateID = "a";
                                    fixedAmount = 80.099998;
                                    normalNumberOfUnits = 55.200001;
                                    numberOfUnits = 66.199997;
                                    numberOfUnitsPerWeek = 21.100000;
                                    ratePerUnit = 19.100000;
                                }}),
                            }};
                            leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 48.200001;
                                    calculationType = "ENTERRATEINPAYTEMPLATE";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 47.099998;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "aspernatur";
                                    numberOfUnits = 16.200001;
                                }}),
                            }};
                            reimbursementLines = new openapisdk.models.shared.ReimbursementLine[]() {{
                                add(new ReimbursementLine() {{
                                    amount = 40.200001;
                                    description = "illum";
                                    expenseAccount = "accusantium";
                                    reimbursementTypeID = "atque";
                                }}),
                            }};
                            superLines = new openapisdk.models.shared.SuperLine[]() {{
                                add(new SuperLine() {{
                                    amount = 40.099998;
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "SALARYSACRIFICE";
                                    expenseAccountCode = "vero";
                                    liabilityAccountCode = "alias";
                                    minimumMonthlyEarnings = 81.099998;
                                    percentage = 2.200000;
                                    superMembershipID = "beatae";
                                }}),
                                add(new SuperLine() {{
                                    amount = 31.200001;
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "SGC";
                                    expenseAccountCode = "magni";
                                    liabilityAccountCode = "necessitatibus";
                                    minimumMonthlyEarnings = 3.100000;
                                    percentage = 69.199997;
                                    superMembershipID = "ut";
                                }}),
                                add(new SuperLine() {{
                                    amount = 99.199997;
                                    calculationType = "STATUTORY";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "quo";
                                    liabilityAccountCode = "et";
                                    minimumMonthlyEarnings = 61.200001;
                                    percentage = 9.100000;
                                    superMembershipID = "asperiores";
                                }}),
                            }};
                        }};
                        payrollCalendarID = "quo";
                        phone = "ea";
                        startDate = "soluta";
                        status = "ACTIVE";
                        superMemberships = new openapisdk.models.shared.SuperMembership[]() {{
                            add(new SuperMembership() {{
                                employeeNumber = "blanditiis";
                                superFundID = "facere";
                                superMembershipID = "in";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "et";
                                superFundID = "odit";
                                superMembershipID = "est";
                            }}),
                        }};
                        taxDeclaration = new TaxDeclarationInput() {{
                            approvedWithholdingVariationPercentage = 67.199997;
                            australianResidentForTaxPurposes = false;
                            eligibleToReceiveLeaveLoading = true;
                            employeeID = "et";
                            employmentBasis = "PARTTIME";
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = true;
                            residencyStatus = "AUSTRALIANRESIDENT";
                            tfnExemptionType = "UNDER18";
                            taxFileNumber = "ea";
                            taxFreeThresholdClaimed = false;
                            taxOffsetEstimatedAmount = 25.200001;
                            upwardVariationTaxWithholdingAmount = 41.099998;
                        }};
                        terminationDate = "qui";
                        title = "magni";
                        twitterUserName = "minus";
                        validationErrors = new openapisdk.models.shared.ValidationError[]() {{
                            add(new ValidationError() {{
                                message = "aut";
                            }}),
                        }};
                    }}),
                }};
            }};

            CreateEmployeeResponse res = sdk.payrollAu.createEmployee(req);

            if (res.employees.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### PayrollAu

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
