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
                    xeroTenantId = "cum";
                }};
                request = new openapisdk.models.shared.EmployeeInput[]() {{
                    add(new EmployeeInput() {{
                        bankAccounts = new openapisdk.models.shared.BankAccount[]() {{
                            add(new BankAccount() {{
                                accountName = "delectus";
                                accountNumber = "et";
                                amount = 13.200000;
                                bsb = "quis";
                                remainder = true;
                                statementText = "cupiditate";
                            }}),
                            add(new BankAccount() {{
                                accountName = "sed";
                                accountNumber = "praesentium";
                                amount = 54.200001;
                                bsb = "architecto";
                                remainder = true;
                                statementText = "ut";
                            }}),
                            add(new BankAccount() {{
                                accountName = "sunt";
                                accountNumber = "modi";
                                amount = 62.099998;
                                bsb = "eos";
                                remainder = true;
                                statementText = "in";
                            }}),
                        }};
                        classification = "est";
                        dateOfBirth = "quos";
                        email = "id";
                        employeeGroupName = "repellat";
                        employeeID = "repellendus";
                        firstName = "numquam";
                        gender = "N";
                        homeAddress = new HomeAddress() {{
                            addressLine1 = "ad";
                            addressLine2 = "velit";
                            city = "distinctio";
                            country = "mollitia";
                            postalCode = "ad";
                            region = "NSW";
                        }};
                        isAuthorisedToApproveLeave = false;
                        isAuthorisedToApproveTimesheets = true;
                        jobTitle = "non";
                        lastName = "nam";
                        leaveBalances = new openapisdk.models.shared.LeaveBalance[]() {{
                            add(new LeaveBalance() {{
                                leaveName = "eum";
                                leaveTypeID = "hic";
                                numberOfUnits = 28.200001;
                                typeOfUnits = "odio";
                            }}),
                            add(new LeaveBalance() {{
                                leaveName = "voluptate";
                                leaveTypeID = "velit";
                                numberOfUnits = 51.200001;
                                typeOfUnits = "vero";
                            }}),
                            add(new LeaveBalance() {{
                                leaveName = "blanditiis";
                                leaveTypeID = "placeat";
                                numberOfUnits = 20.200001;
                                typeOfUnits = "eligendi";
                            }}),
                        }};
                        leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 49.200001;
                                calculationType = "FIXEDAMOUNTEACHPERIOD";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 86.199997;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "aut";
                                numberOfUnits = 14.200000;
                            }}),
                            add(new LeaveLine() {{
                                annualNumberOfUnits = 33.200001;
                                calculationType = "BASEDONORDINARYEARNINGS";
                                employmentTerminationPaymentType = "O";
                                entitlementFinalPayPayoutType = "PAIDOUT";
                                fullTimeNumberOfUnitsPerPeriod = 77.199997;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "voluptatibus";
                                numberOfUnits = 73.199997;
                            }}),
                        }};
                        middleNames = "fugiat";
                        mobile = "adipisci";
                        openingBalances = new OpeningBalances() {{
                            deductionLines = new openapisdk.models.shared.DeductionLine[]() {{
                                add(new DeductionLine() {{
                                    amount = 93.099998;
                                    calculationType = "FIXEDAMOUNT";
                                    deductionTypeID = "sequi";
                                    numberOfUnits = 22.200001;
                                    percentage = 43.099998;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 47.099998;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "aliquid";
                                    numberOfUnits = 71.099998;
                                    percentage = 24.100000;
                                }}),
                            }};
                            earningsLines = new openapisdk.models.shared.EarningsLine[]() {{
                                add(new EarningsLine() {{
                                    amount = 66.199997;
                                    annualSalary = 49.099998;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "inventore";
                                    fixedAmount = 13.100000;
                                    normalNumberOfUnits = 3.100000;
                                    numberOfUnits = 81.199997;
                                    numberOfUnitsPerWeek = 1.100000;
                                    ratePerUnit = 39.099998;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 38.200001;
                                    annualSalary = 7.200000;
                                    calculationType = "ANNUALSALARY";
                                    earningsRateID = "deserunt";
                                    fixedAmount = 87.099998;
                                    normalNumberOfUnits = 29.200001;
                                    numberOfUnits = 50.200001;
                                    numberOfUnitsPerWeek = 30.200001;
                                    ratePerUnit = 20.100000;
                                }}),
                            }};
                            leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 62.200001;
                                    calculationType = "FIXEDAMOUNTEACHPERIOD";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 68.199997;
                                    includeSuperannuationGuaranteeContribution = true;
                                    leaveTypeID = "aut";
                                    numberOfUnits = 94.199997;
                                }}),
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 14.200000;
                                    calculationType = "NOCALCULATIONREQUIRED";
                                    employmentTerminationPaymentType = "O";
                                    entitlementFinalPayPayoutType = "PAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 84.099998;
                                    includeSuperannuationGuaranteeContribution = false;
                                    leaveTypeID = "consequatur";
                                    numberOfUnits = 60.200001;
                                }}),
                            }};
                            openingBalanceDate = "veniam";
                            reimbursementLines = new openapisdk.models.shared.ReimbursementLine[]() {{
                                add(new ReimbursementLine() {{
                                    amount = 98.199997;
                                    description = "explicabo";
                                    expenseAccount = "maiores";
                                    reimbursementTypeID = "ducimus";
                                }}),
                                add(new ReimbursementLine() {{
                                    amount = 90.099998;
                                    description = "omnis";
                                    expenseAccount = "ut";
                                    reimbursementTypeID = "libero";
                                }}),
                                add(new ReimbursementLine() {{
                                    amount = 26.100000;
                                    description = "sit";
                                    expenseAccount = "quasi";
                                    reimbursementTypeID = "vitae";
                                }}),
                            }};
                            superLines = new openapisdk.models.shared.SuperLine[]() {{
                                add(new SuperLine() {{
                                    amount = 15.100000;
                                    calculationType = "STATUTORY";
                                    contributionType = "SGC";
                                    expenseAccountCode = "est";
                                    liabilityAccountCode = "est";
                                    minimumMonthlyEarnings = 65.099998;
                                    percentage = 76.199997;
                                    superMembershipID = "et";
                                }}),
                            }};
                            tax = "molestias";
                        }};
                        ordinaryEarningsRateID = "minus";
                        payTemplate = new PayTemplate() {{
                            deductionLines = new openapisdk.models.shared.DeductionLine[]() {{
                                add(new DeductionLine() {{
                                    amount = 51.099998;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "autem";
                                    numberOfUnits = 51.099998;
                                    percentage = 44.200001;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 97.099998;
                                    calculationType = "PRETAX";
                                    deductionTypeID = "sequi";
                                    numberOfUnits = 78.199997;
                                    percentage = 74.199997;
                                }}),
                                add(new DeductionLine() {{
                                    amount = 34.200001;
                                    calculationType = "POSTTAX";
                                    deductionTypeID = "voluptate";
                                    numberOfUnits = 97.099998;
                                    percentage = 58.099998;
                                }}),
                            }};
                            earningsLines = new openapisdk.models.shared.EarningsLine[]() {{
                                add(new EarningsLine() {{
                                    amount = 67.099998;
                                    annualSalary = 29.100000;
                                    calculationType = "USEEARNINGSRATE";
                                    earningsRateID = "voluptas";
                                    fixedAmount = 88.099998;
                                    normalNumberOfUnits = 15.100000;
                                    numberOfUnits = 62.200001;
                                    numberOfUnitsPerWeek = 98.099998;
                                    ratePerUnit = 45.099998;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 93.199997;
                                    annualSalary = 55.099998;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "soluta";
                                    fixedAmount = 91.099998;
                                    normalNumberOfUnits = 36.099998;
                                    numberOfUnits = 13.100000;
                                    numberOfUnitsPerWeek = 64.199997;
                                    ratePerUnit = 89.199997;
                                }}),
                                add(new EarningsLine() {{
                                    amount = 57.200001;
                                    annualSalary = 74.099998;
                                    calculationType = "ENTEREARNINGSRATE";
                                    earningsRateID = "occaecati";
                                    fixedAmount = 24.100000;
                                    normalNumberOfUnits = 25.200001;
                                    numberOfUnits = 74.099998;
                                    numberOfUnitsPerWeek = 77.099998;
                                    ratePerUnit = 67.199997;
                                }}),
                            }};
                            leaveLines = new openapisdk.models.shared.LeaveLine[]() {{
                                add(new LeaveLine() {{
                                    annualNumberOfUnits = 6.100000;
                                    calculationType = "";
                                    employmentTerminationPaymentType = "R";
                                    entitlementFinalPayPayoutType = "NOTPAIDOUT";
                                    fullTimeNumberOfUnitsPerPeriod = 76.199997;
                                    includeSuperannuationGuaranteeContribution = false;
                                    leaveTypeID = "est";
                                    numberOfUnits = 3.200000;
                                }}),
                            }};
                            reimbursementLines = new openapisdk.models.shared.ReimbursementLine[]() {{
                                add(new ReimbursementLine() {{
                                    amount = 68.099998;
                                    description = "reprehenderit";
                                    expenseAccount = "quod";
                                    reimbursementTypeID = "et";
                                }}),
                            }};
                            superLines = new openapisdk.models.shared.SuperLine[]() {{
                                add(new SuperLine() {{
                                    amount = 52.099998;
                                    calculationType = "FIXEDAMOUNT";
                                    contributionType = "SALARYSACRIFICE";
                                    expenseAccountCode = "sunt";
                                    liabilityAccountCode = "incidunt";
                                    minimumMonthlyEarnings = 99.199997;
                                    percentage = 20.100000;
                                    superMembershipID = "non";
                                }}),
                                add(new SuperLine() {{
                                    amount = 89.199997;
                                    calculationType = "PERCENTAGEOFEARNINGS";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "autem";
                                    liabilityAccountCode = "consequatur";
                                    minimumMonthlyEarnings = 65.099998;
                                    percentage = 28.100000;
                                    superMembershipID = "ad";
                                }}),
                                add(new SuperLine() {{
                                    amount = 22.200001;
                                    calculationType = "STATUTORY";
                                    contributionType = "EMPLOYERADDITIONAL";
                                    expenseAccountCode = "consequatur";
                                    liabilityAccountCode = "saepe";
                                    minimumMonthlyEarnings = 41.099998;
                                    percentage = 35.200001;
                                    superMembershipID = "eius";
                                }}),
                            }};
                        }};
                        payrollCalendarID = "recusandae";
                        phone = "nisi";
                        startDate = "sit";
                        status = "ACTIVE";
                        superMemberships = new openapisdk.models.shared.SuperMembership[]() {{
                            add(new SuperMembership() {{
                                employeeNumber = "quisquam";
                                superFundID = "dolor";
                                superMembershipID = "itaque";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "reiciendis";
                                superFundID = "expedita";
                                superMembershipID = "itaque";
                            }}),
                            add(new SuperMembership() {{
                                employeeNumber = "qui";
                                superFundID = "voluptatum";
                                superMembershipID = "eius";
                            }}),
                        }};
                        taxDeclaration = new TaxDeclarationInput() {{
                            approvedWithholdingVariationPercentage = 64.099998;
                            australianResidentForTaxPurposes = false;
                            eligibleToReceiveLeaveLoading = false;
                            employeeID = "illum";
                            employmentBasis = "PARTTIME";
                            hasHELPDebt = false;
                            hasSFSSDebt = true;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = "AUSTRALIANRESIDENT";
                            tfnExemptionType = "PENSIONER";
                            taxFileNumber = "iste";
                            taxFreeThresholdClaimed = true;
                            taxOffsetEstimatedAmount = 77.199997;
                            upwardVariationTaxWithholdingAmount = 43.099998;
                        }};
                        terminationDate = "veritatis";
                        title = "ducimus";
                        twitterUserName = "ut";
                        validationErrors = new openapisdk.models.shared.ValidationError[]() {{
                            add(new ValidationError() {{
                                message = "inventore";
                            }}),
                            add(new ValidationError() {{
                                message = "voluptatem";
                            }}),
                            add(new ValidationError() {{
                                message = "voluptates";
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
