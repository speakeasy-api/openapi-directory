# payrollAu

## Overview

Operations available to regular developers

### Available Operations

* [createEmployee](#createemployee) - Creates a payroll employee
* [createLeaveApplication](#createleaveapplication) - Creates a leave application
* [createPayItem](#createpayitem) - Creates a pay item
* [createPayRun](#createpayrun) - Creates a pay run
* [createPayrollCalendar](#createpayrollcalendar) - Creates a Payroll Calendar
* [createSuperfund](#createsuperfund) - Creates a superfund
* [createTimesheet](#createtimesheet) - Creates a timesheet
* [getEmployee](#getemployee) - Retrieves an employee's detail by unique employee id
* [getEmployees](#getemployees) - Searches payroll employees
* [getLeaveApplication](#getleaveapplication) - Retrieves a leave application by a unique leave application id
* [getLeaveApplications](#getleaveapplications) - Retrieves leave applications
* [getPayItems](#getpayitems) - Retrieves pay items
* [getPayRun](#getpayrun) - Retrieves a pay run by using a unique pay run id
* [getPayRuns](#getpayruns) - Retrieves pay runs
* [getPayrollCalendar](#getpayrollcalendar) - Retrieves payroll calendar by using a unique payroll calendar ID
* [getPayrollCalendars](#getpayrollcalendars) - Retrieves payroll calendars
* [getPayslip](#getpayslip) - Retrieves for a payslip by a unique payslip id
* [getSettings](#getsettings) - Retrieves payroll settings
* [getSuperfund](#getsuperfund) - Retrieves a superfund by using a unique superfund ID
* [getSuperfundProducts](#getsuperfundproducts) - Retrieves superfund products
* [getSuperfunds](#getsuperfunds) - Retrieves superfunds
* [getTimesheet](#gettimesheet) - Retrieves a timesheet by using a unique timesheet id
* [getTimesheets](#gettimesheets) - Retrieves timesheets
* [updateEmployee](#updateemployee) - Updates an employee's detail
* [updateLeaveApplication](#updateleaveapplication) - Updates a specific leave application
* [updatePayRun](#updatepayrun) - Updates a pay run
* [updatePayslip](#updatepayslip) - Updates a payslip
* [updateSuperfund](#updatesuperfund) - Updates a superfund
* [updateTimesheet](#updatetimesheet) - Updates a timesheet

## createEmployee

Creates a payroll employee

### Example Usage

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
                                    }};
                                    middleNames = "Adena";
                                    mobile = "415-234-5678";
                                    openingBalances = new OpeningBalances() {{
                                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
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
                                                calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
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
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
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
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
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
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                                expenseAccountCode = "478";
                                                liabilityAccountCode = "826";
                                                minimumMonthlyEarnings = 450;
                                                percentage = 9;
                                                superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                            }}),
                                            add(new SuperLine() {{
                                                amount = 10;
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
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
                                        residencyStatus = ResidencyStatusEnum.AUSTRALIANRESIDENT;
                                        tfnExemptionType = TFNExemptionTypeEnum.PENSIONER;
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
                                            message = "provident";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "quos";
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
                                            calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
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
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                                amount = 10;
                                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
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
                                        }};
                                        superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
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
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
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
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
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
                                        tfnExemptionType = TFNExemptionTypeEnum.NOTQUOTED;
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
                                            message = "cumque";
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
                                            calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
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
                                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
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
                                        }};
                                        leaveLines = new org.openapis.openapi.models.shared.LeaveLine[]{{
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
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
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
                                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
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
                                                calculationType = LeaveLineCalculationTypeEnum.FIXEDAMOUNTEACHPERIOD;
                                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
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
                                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                                contributionType = SuperannuationContributionTypeEnum.SGC;
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
                                        employmentBasis = EmploymentBasisEnum.CASUAL;
                                        hasHELPDebt = false;
                                        hasSFSSDebt = false;
                                        hasStudentStartupLoan = true;
                                        hasTradeSupportLoanDebt = false;
                                        residencyStatus = ResidencyStatusEnum.WORKINGHOLIDAYMAKER;
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
                                            message = "reiciendis";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "amet";
                                        }}),
                                    }};
                                }}),
                            }}, "dolorum");            

            CreateEmployeeResponse res = sdk.payrollAu.createEmployee(req, new CreateEmployeeSecurity("numquam") {{
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

## createLeaveApplication

Creates a leave application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLeaveApplicationRequest;
import org.openapis.openapi.models.operations.CreateLeaveApplicationResponse;
import org.openapis.openapi.models.operations.CreateLeaveApplicationSecurity;
import org.openapis.openapi.models.shared.LeaveApplicationInput;
import org.openapis.openapi.models.shared.LeavePeriod;
import org.openapis.openapi.models.shared.LeavePeriodStatusEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLeaveApplicationRequest req = new CreateLeaveApplicationRequest(                new org.openapis.openapi.models.shared.LeaveApplicationInput[]{{
                                add(new LeaveApplicationInput() {{
                                    description = "My leave";
                                    employeeID = "fb4ebd68-6568-41eb-96ab-628a0f54b4b8";
                                    endDate = "/Date(322560000000+0000)/";
                                    leaveApplicationID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    leavePeriods = new org.openapis.openapi.models.shared.LeavePeriod[]{{
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                    }};
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    startDate = "/Date(322560000000+0000)/";
                                    title = "Annual Leave";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "odio";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "quaerat";
                                        }}),
                                    }};
                                }}),
                            }}, "accusamus");            

            CreateLeaveApplicationResponse res = sdk.payrollAu.createLeaveApplication(req, new CreateLeaveApplicationSecurity("quidem") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaveApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayItem

Creates a pay item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayItemRequest;
import org.openapis.openapi.models.operations.CreatePayItemResponse;
import org.openapis.openapi.models.operations.CreatePayItemSecurity;
import org.openapis.openapi.models.shared.AllowanceTypeEnum;
import org.openapis.openapi.models.shared.DeductionTypeDeductionCategoryEnum;
import org.openapis.openapi.models.shared.DeductionTypeInput;
import org.openapis.openapi.models.shared.EarningsRateInput;
import org.openapis.openapi.models.shared.EarningsTypeEnum;
import org.openapis.openapi.models.shared.EmploymentTerminationPaymentTypeEnum;
import org.openapis.openapi.models.shared.LeaveTypeInput;
import org.openapis.openapi.models.shared.PayItemInput;
import org.openapis.openapi.models.shared.RateTypeEnum;
import org.openapis.openapi.models.shared.ReimbursementTypeInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePayItemRequest req = new CreatePayItemRequest(                new PayItemInput() {{
                                deductionTypes = new org.openapis.openapi.models.shared.DeductionTypeInput[]{{
                                    add(new DeductionTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        deductionCategory = DeductionTypeDeductionCategoryEnum.UNIONFEES;
                                        deductionTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        isExemptFromW1 = false;
                                        name = "PTO";
                                        reducesSuper = false;
                                        reducesTax = false;
                                    }}),
                                    add(new DeductionTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        deductionCategory = DeductionTypeDeductionCategoryEnum.UNIONFEES;
                                        deductionTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        isExemptFromW1 = false;
                                        name = "PTO";
                                        reducesSuper = false;
                                        reducesTax = false;
                                    }}),
                                    add(new DeductionTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        deductionCategory = DeductionTypeDeductionCategoryEnum.NONE;
                                        deductionTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        isExemptFromW1 = false;
                                        name = "PTO";
                                        reducesSuper = false;
                                        reducesTax = false;
                                    }}),
                                    add(new DeductionTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        deductionCategory = DeductionTypeDeductionCategoryEnum.UNIONFEES;
                                        deductionTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        isExemptFromW1 = false;
                                        name = "PTO";
                                        reducesSuper = false;
                                        reducesTax = false;
                                    }}),
                                }};
                                earningsRates = new org.openapis.openapi.models.shared.EarningsRateInput[]{{
                                    add(new EarningsRateInput() {{
                                        accountCode = "720";
                                        accrueLeave = false;
                                        allowanceType = AllowanceTypeEnum.JOBKEEPER;
                                        amount = 50.3;
                                        currentRecord = true;
                                        earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        earningsType = EarningsTypeEnum.FIXED;
                                        employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                        isExemptFromSuper = false;
                                        isExemptFromTax = false;
                                        isReportableAsW1 = false;
                                        multiplier = 1.5;
                                        name = "PTO";
                                        ratePerUnit = "10";
                                        rateType = RateTypeEnum.RATEPERUNIT;
                                        typeOfUnits = "Fixed";
                                    }}),
                                }};
                                leaveTypes = new org.openapis.openapi.models.shared.LeaveTypeInput[]{{
                                    add(new LeaveTypeInput() {{
                                        currentRecord = true;
                                        isPaidLeave = true;
                                        leaveLoadingRate = 2;
                                        leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        name = "PTO";
                                        normalEntitlement = 152;
                                        showOnPayslip = true;
                                        typeOfUnits = "Hours";
                                    }}),
                                    add(new LeaveTypeInput() {{
                                        currentRecord = true;
                                        isPaidLeave = true;
                                        leaveLoadingRate = 2;
                                        leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                        name = "PTO";
                                        normalEntitlement = 152;
                                        showOnPayslip = true;
                                        typeOfUnits = "Hours";
                                    }}),
                                }};
                                reimbursementTypes = new org.openapis.openapi.models.shared.ReimbursementTypeInput[]{{
                                    add(new ReimbursementTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        name = "PTO";
                                        reimbursementTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    }}),
                                    add(new ReimbursementTypeInput() {{
                                        accountCode = "720";
                                        currentRecord = true;
                                        name = "PTO";
                                        reimbursementTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    }}),
                                }};
                            }};, "dolorum");            

            CreatePayItemResponse res = sdk.payrollAu.createPayItem(req, new CreatePayItemSecurity("deleniti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayRun

Creates a pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayRunRequest;
import org.openapis.openapi.models.operations.CreatePayRunResponse;
import org.openapis.openapi.models.operations.CreatePayRunSecurity;
import org.openapis.openapi.models.shared.PayRunInput;
import org.openapis.openapi.models.shared.PayRunStatusEnum;
import org.openapis.openapi.models.shared.PayslipSummaryInput;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePayRunRequest req = new CreatePayRunRequest(                new org.openapis.openapi.models.shared.PayRunInput[]{{
                                add(new PayRunInput("bfac31bd-ea62-4fc8-a5e7-7965d9504b15") {{
                                    deductions = 8966.72;
                                    netPay = 862.5;
                                    payRunID = "bba1d10f-63b1-4692-b5c5-a99f869523a4";
                                    payRunPeriodEndDate = "/Date(322560000000+0000)/";
                                    payRunPeriodStartDate = "/Date(322560000000+0000)/";
                                    payRunStatus = PayRunStatusEnum.POSTED;
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    payslipMessage = "Thanks for being awesome";
                                    payslips = new org.openapis.openapi.models.shared.PayslipSummaryInput[]{{
                                        add(new PayslipSummaryInput() {{
                                            deductions = 4694.97;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 2168.97;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                        add(new PayslipSummaryInput() {{
                                            deductions = 4560.15;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 6630.78;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                        add(new PayslipSummaryInput() {{
                                            deductions = 9064.18;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 2633.22;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                        add(new PayslipSummaryInput() {{
                                            deductions = 1372.2;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 206.51;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                    }};
                                    reimbursement = 2292.19;
                                    super_ = 75.6;
                                    tax = 198;
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "accusamus";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "ad";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "saepe";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "suscipit";
                                        }}),
                                    }};
                                    wages = 1060.5;
                                }}),
                                add(new PayRunInput("bfac31bd-ea62-4fc8-a5e7-7965d9504b15") {{
                                    deductions = 6457.85;
                                    netPay = 862.5;
                                    payRunID = "bba1d10f-63b1-4692-b5c5-a99f869523a4";
                                    payRunPeriodEndDate = "/Date(322560000000+0000)/";
                                    payRunPeriodStartDate = "/Date(322560000000+0000)/";
                                    payRunStatus = PayRunStatusEnum.POSTED;
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    payslipMessage = "Thanks for being awesome";
                                    payslips = new org.openapis.openapi.models.shared.PayslipSummaryInput[]{{
                                        add(new PayslipSummaryInput() {{
                                            deductions = 8310.49;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 5197.11;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                        add(new PayslipSummaryInput() {{
                                            deductions = 6289.82;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 0.55;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                    }};
                                    reimbursement = 8726.51;
                                    super_ = 75.6;
                                    tax = 198;
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "tempora";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "vel";
                                        }}),
                                    }};
                                    wages = 1060.5;
                                }}),
                                add(new PayRunInput("bfac31bd-ea62-4fc8-a5e7-7965d9504b15") {{
                                    deductions = 7980.47;
                                    netPay = 862.5;
                                    payRunID = "bba1d10f-63b1-4692-b5c5-a99f869523a4";
                                    payRunPeriodEndDate = "/Date(322560000000+0000)/";
                                    payRunPeriodStartDate = "/Date(322560000000+0000)/";
                                    payRunStatus = PayRunStatusEnum.POSTED;
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    payslipMessage = "Thanks for being awesome";
                                    payslips = new org.openapis.openapi.models.shared.PayslipSummaryInput[]{{
                                        add(new PayslipSummaryInput() {{
                                            deductions = 6798.8;
                                            employeeGroup = "Marketing";
                                            employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                            firstName = "Karen";
                                            lastName = "Jones";
                                            netPay = 862.5;
                                            payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                            reimbursements = 9527.92;
                                            super_ = 75.6;
                                            tax = 198;
                                            wages = 1060.5;
                                        }}),
                                    }};
                                    reimbursement = 4561.3;
                                    super_ = 75.6;
                                    tax = 198;
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "iusto";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "ipsum";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "quisquam";
                                        }}),
                                    }};
                                    wages = 1060.5;
                                }}),
                            }}, "tenetur");            

            CreatePayRunResponse res = sdk.payrollAu.createPayRun(req, new CreatePayRunSecurity("amet") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayrollCalendar

Creates a Payroll Calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayrollCalendarRequest;
import org.openapis.openapi.models.operations.CreatePayrollCalendarResponse;
import org.openapis.openapi.models.operations.CreatePayrollCalendarSecurity;
import org.openapis.openapi.models.shared.CalendarTypeEnum;
import org.openapis.openapi.models.shared.PayrollCalendarInput;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePayrollCalendarRequest req = new CreatePayrollCalendarRequest(                new org.openapis.openapi.models.shared.PayrollCalendarInput[]{{
                                add(new PayrollCalendarInput() {{
                                    calendarType = CalendarTypeEnum.QUARTERLY;
                                    name = "Fortnightly Calendar";
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    startDate = "/Date(322560000000+0000)/";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "enim";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "dolorem";
                                        }}),
                                    }};
                                }}),
                                add(new PayrollCalendarInput() {{
                                    calendarType = CalendarTypeEnum.QUARTERLY;
                                    name = "Fortnightly Calendar";
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    startDate = "/Date(322560000000+0000)/";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "nihil";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "sit";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "expedita";
                                        }}),
                                    }};
                                }}),
                                add(new PayrollCalendarInput() {{
                                    calendarType = CalendarTypeEnum.FORTNIGHTLY;
                                    name = "Fortnightly Calendar";
                                    paymentDate = "/Date(322560000000+0000)/";
                                    payrollCalendarID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    startDate = "/Date(322560000000+0000)/";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "vel";
                                        }}),
                                    }};
                                }}),
                            }}, "libero");            

            CreatePayrollCalendarResponse res = sdk.payrollAu.createPayrollCalendar(req, new CreatePayrollCalendarSecurity("voluptas") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payrollCalendars != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSuperfund

Creates a superfund

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSuperfundRequest;
import org.openapis.openapi.models.operations.CreateSuperfundResponse;
import org.openapis.openapi.models.operations.CreateSuperfundSecurity;
import org.openapis.openapi.models.shared.SuperFundInput;
import org.openapis.openapi.models.shared.SuperFundTypeEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSuperfundRequest req = new CreateSuperfundRequest(                new org.openapis.openapi.models.shared.SuperFundInput[]{{
                                add(new SuperFundInput(SuperFundTypeEnum.REGULATED) {{
                                    abn = "40022701955";
                                    accountName = "Money account";
                                    accountNumber = "234234234";
                                    bsb = "234324";
                                    electronicServiceAddress = "12345678";
                                    employerNumber = "324324";
                                    name = "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)";
                                    spin = "4545445454";
                                    superFundID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    type = SuperFundTypeEnum.REGULATED;
                                    usi = "40022701955001";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "incidunt";
                                        }}),
                                    }};
                                }}),
                                add(new SuperFundInput(SuperFundTypeEnum.SMSF) {{
                                    abn = "40022701955";
                                    accountName = "Money account";
                                    accountNumber = "234234234";
                                    bsb = "234324";
                                    electronicServiceAddress = "12345678";
                                    employerNumber = "324324";
                                    name = "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)";
                                    spin = "4545445454";
                                    superFundID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    type = SuperFundTypeEnum.SMSF;
                                    usi = "40022701955001";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "pariatur";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "soluta";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "dicta";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "laborum";
                                        }}),
                                    }};
                                }}),
                                add(new SuperFundInput(SuperFundTypeEnum.SMSF) {{
                                    abn = "40022701955";
                                    accountName = "Money account";
                                    accountNumber = "234234234";
                                    bsb = "234324";
                                    electronicServiceAddress = "12345678";
                                    employerNumber = "324324";
                                    name = "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)";
                                    spin = "4545445454";
                                    superFundID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                                    type = SuperFundTypeEnum.REGULATED;
                                    usi = "40022701955001";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "dolores";
                                        }}),
                                    }};
                                }}),
                            }}, "facilis");            

            CreateSuperfundResponse res = sdk.payrollAu.createSuperfund(req, new CreateSuperfundSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.superFunds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTimesheet

Creates a timesheet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTimesheetRequest;
import org.openapis.openapi.models.operations.CreateTimesheetResponse;
import org.openapis.openapi.models.operations.CreateTimesheetSecurity;
import org.openapis.openapi.models.shared.TimesheetInput;
import org.openapis.openapi.models.shared.TimesheetLineInput;
import org.openapis.openapi.models.shared.TimesheetStatusEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTimesheetRequest req = new CreateTimesheetRequest(                new org.openapis.openapi.models.shared.TimesheetInput[]{{
                                add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                                    employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                                    endDate = "/Date(322560000000+0000)/";
                                    hours = 31;
                                    startDate = "/Date(322560000000+0000)/";
                                    status = TimesheetStatusEnum.APPROVED;
                                    timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                                    timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                    }};
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "sunt";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "ullam";
                                        }}),
                                    }};
                                }}),
                                add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                                    employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                                    endDate = "/Date(322560000000+0000)/";
                                    hours = 31;
                                    startDate = "/Date(322560000000+0000)/";
                                    status = TimesheetStatusEnum.REJECTED;
                                    timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                                    timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                                add(3),
                                                add(3),
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                                add(3),
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                        add(new TimesheetLineInput() {{
                                            earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                            numberOfUnits = new Double[]{{
                                                add(3),
                                                add(3),
                                                add(3),
                                            }};
                                            trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                                        }}),
                                    }};
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "saepe";
                                        }}),
                                    }};
                                }}),
                            }}, "ipsum");            

            CreateTimesheetResponse res = sdk.payrollAu.createTimesheet(req, new CreateTimesheetSecurity("veritatis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.timesheets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployee

Retrieves an employee's detail by unique employee id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRequest;
import org.openapis.openapi.models.operations.GetEmployeeResponse;
import org.openapis.openapi.models.operations.GetEmployeeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRequest req = new GetEmployeeRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "nobis");            

            GetEmployeeResponse res = sdk.payrollAu.getEmployee(req, new GetEmployeeSecurity("quos") {{
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

## getEmployees

Searches payroll employees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesRequest;
import org.openapis.openapi.models.operations.GetEmployeesResponse;
import org.openapis.openapi.models.operations.GetEmployeesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesRequest req = new GetEmployeesRequest("tempore") {{
                ifModifiedSince = "cupiditate";
                order = "aperiam";
                page = 961937L;
                where = "dolorem";
            }};            

            GetEmployeesResponse res = sdk.payrollAu.getEmployees(req, new GetEmployeesSecurity("dolore") {{
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

## getLeaveApplication

Retrieves a leave application by a unique leave application id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLeaveApplicationRequest;
import org.openapis.openapi.models.operations.GetLeaveApplicationResponse;
import org.openapis.openapi.models.operations.GetLeaveApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLeaveApplicationRequest req = new GetLeaveApplicationRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "labore");            

            GetLeaveApplicationResponse res = sdk.payrollAu.getLeaveApplication(req, new GetLeaveApplicationSecurity("adipisci") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaveApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLeaveApplications

Retrieves leave applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLeaveApplicationsRequest;
import org.openapis.openapi.models.operations.GetLeaveApplicationsResponse;
import org.openapis.openapi.models.operations.GetLeaveApplicationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLeaveApplicationsRequest req = new GetLeaveApplicationsRequest("dolorum") {{
                ifModifiedSince = "architecto";
                order = "quae";
                page = 16429L;
                where = "quas";
            }};            

            GetLeaveApplicationsResponse res = sdk.payrollAu.getLeaveApplications(req, new GetLeaveApplicationsSecurity("itaque") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaveApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayItems

Retrieves pay items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayItemsRequest;
import org.openapis.openapi.models.operations.GetPayItemsResponse;
import org.openapis.openapi.models.operations.GetPayItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayItemsRequest req = new GetPayItemsRequest("consequatur") {{
                ifModifiedSince = "est";
                order = "repellendus";
                page = 785153L;
                where = "doloribus";
            }};            

            GetPayItemsResponse res = sdk.payrollAu.getPayItems(req, new GetPayItemsSecurity("ut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRun

Retrieves a pay run by using a unique pay run id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunRequest;
import org.openapis.openapi.models.operations.GetPayRunResponse;
import org.openapis.openapi.models.operations.GetPayRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunRequest req = new GetPayRunRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "facilis");            

            GetPayRunResponse res = sdk.payrollAu.getPayRun(req, new GetPayRunSecurity("cupiditate") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRuns

Retrieves pay runs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunsRequest;
import org.openapis.openapi.models.operations.GetPayRunsResponse;
import org.openapis.openapi.models.operations.GetPayRunsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunsRequest req = new GetPayRunsRequest("qui") {{
                ifModifiedSince = "quae";
                order = "laudantium";
                page = 485628L;
                where = "occaecati";
            }};            

            GetPayRunsResponse res = sdk.payrollAu.getPayRuns(req, new GetPayRunsSecurity("voluptatibus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayrollCalendar

Retrieves payroll calendar by using a unique payroll calendar ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayrollCalendarRequest;
import org.openapis.openapi.models.operations.GetPayrollCalendarResponse;
import org.openapis.openapi.models.operations.GetPayrollCalendarSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayrollCalendarRequest req = new GetPayrollCalendarRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "quisquam");            

            GetPayrollCalendarResponse res = sdk.payrollAu.getPayrollCalendar(req, new GetPayrollCalendarSecurity("vero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payrollCalendars != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayrollCalendars

Retrieves payroll calendars

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayrollCalendarsRequest;
import org.openapis.openapi.models.operations.GetPayrollCalendarsResponse;
import org.openapis.openapi.models.operations.GetPayrollCalendarsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayrollCalendarsRequest req = new GetPayrollCalendarsRequest("omnis") {{
                ifModifiedSince = "quis";
                order = "ipsum";
                page = 961571L;
                where = "voluptate";
            }};            

            GetPayrollCalendarsResponse res = sdk.payrollAu.getPayrollCalendars(req, new GetPayrollCalendarsSecurity("consectetur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payrollCalendars != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayslip

Retrieves for a payslip by a unique payslip id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayslipRequest;
import org.openapis.openapi.models.operations.GetPayslipResponse;
import org.openapis.openapi.models.operations.GetPayslipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayslipRequest req = new GetPayslipRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "vero");            

            GetPayslipResponse res = sdk.payrollAu.getPayslip(req, new GetPayslipSecurity("tenetur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payslipObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettings

Retrieves payroll settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsRequest;
import org.openapis.openapi.models.operations.GetSettingsResponse;
import org.openapis.openapi.models.operations.GetSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsRequest req = new GetSettingsRequest("dignissimos");            

            GetSettingsResponse res = sdk.payrollAu.getSettings(req, new GetSettingsSecurity("hic") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.settingsObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuperfund

Retrieves a superfund by using a unique superfund ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuperfundRequest;
import org.openapis.openapi.models.operations.GetSuperfundResponse;
import org.openapis.openapi.models.operations.GetSuperfundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuperfundRequest req = new GetSuperfundRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "distinctio");            

            GetSuperfundResponse res = sdk.payrollAu.getSuperfund(req, new GetSuperfundSecurity("quod") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.superFunds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuperfundProducts

Retrieves superfund products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuperfundProductsRequest;
import org.openapis.openapi.models.operations.GetSuperfundProductsResponse;
import org.openapis.openapi.models.operations.GetSuperfundProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuperfundProductsRequest req = new GetSuperfundProductsRequest("odio") {{
                abn = "similique";
                usi = "facilis";
            }};            

            GetSuperfundProductsResponse res = sdk.payrollAu.getSuperfundProducts(req, new GetSuperfundProductsSecurity("vero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.superFundProducts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuperfunds

Retrieves superfunds

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuperfundsRequest;
import org.openapis.openapi.models.operations.GetSuperfundsResponse;
import org.openapis.openapi.models.operations.GetSuperfundsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuperfundsRequest req = new GetSuperfundsRequest("ducimus") {{
                ifModifiedSince = "dolore";
                order = "quibusdam";
                page = 848944L;
                where = "sequi";
            }};            

            GetSuperfundsResponse res = sdk.payrollAu.getSuperfunds(req, new GetSuperfundsSecurity("natus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.superFunds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimesheet

Retrieves a timesheet by using a unique timesheet id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimesheetRequest;
import org.openapis.openapi.models.operations.GetTimesheetResponse;
import org.openapis.openapi.models.operations.GetTimesheetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimesheetRequest req = new GetTimesheetRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "impedit");            

            GetTimesheetResponse res = sdk.payrollAu.getTimesheet(req, new GetTimesheetSecurity("aut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.timesheetObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimesheets

Retrieves timesheets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimesheetsRequest;
import org.openapis.openapi.models.operations.GetTimesheetsResponse;
import org.openapis.openapi.models.operations.GetTimesheetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimesheetsRequest req = new GetTimesheetsRequest("voluptatibus") {{
                ifModifiedSince = "exercitationem";
                order = "nulla";
                page = 148141L;
                where = "porro";
            }};            

            GetTimesheetsResponse res = sdk.payrollAu.getTimesheets(req, new GetTimesheetsSecurity("maiores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.timesheets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmployee

Update properties on a single employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmployeeRequest;
import org.openapis.openapi.models.operations.UpdateEmployeeResponse;
import org.openapis.openapi.models.operations.UpdateEmployeeSecurity;
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

            UpdateEmployeeRequest req = new UpdateEmployeeRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "doloribus") {{
                requestBody = new org.openapis.openapi.models.shared.EmployeeInput[]{{
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
                                    employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.R;
                                    entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
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
                                add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                    amount = 10;
                                    calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
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
                                    contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
                                    expenseAccountCode = "478";
                                    liabilityAccountCode = "826";
                                    minimumMonthlyEarnings = 450;
                                    percentage = 9;
                                    superMembershipID = "4333d5cd-53a5-4c31-98e5-a8b4e5676b0b";
                                }}),
                                add(new SuperLine() {{
                                    amount = 10;
                                    calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
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
                                    contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
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
                            employmentBasis = EmploymentBasisEnum.SUPERINCOMESTREAM;
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = ResidencyStatusEnum.FOREIGNRESIDENT;
                            tfnExemptionType = TFNExemptionTypeEnum.PENSIONER;
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
                                message = "tempora";
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
                                calculationType = LeaveLineCalculationTypeEnum.ENTERRATEINPAYTEMPLATE;
                                employmentTerminationPaymentType = EmploymentTerminationPaymentTypeEnum.O;
                                entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
                                fullTimeNumberOfUnitsPerPeriod = 2.5;
                                includeSuperannuationGuaranteeContribution = true;
                                leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                numberOfUnits = 2.5;
                            }}),
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
                        }};
                        middleNames = "Adena";
                        mobile = "415-234-5678";
                        openingBalances = new OpeningBalances() {{
                            deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                                add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                    amount = 10;
                                    calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
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
                                    calculationType = LeaveLineCalculationTypeEnum.BASEDONORDINARYEARNINGS;
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
                                    calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
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
                                    entitlementFinalPayPayoutType = EntitlementFinalPayPayoutTypeEnum.NOTPAIDOUT;
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
                                    calculationType = LeaveLineCalculationTypeEnum.UNKNOWN;
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
                            }};
                            superLines = new org.openapis.openapi.models.shared.SuperLine[]{{
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
                            employmentBasis = EmploymentBasisEnum.CASUAL;
                            hasHELPDebt = false;
                            hasSFSSDebt = false;
                            hasStudentStartupLoan = true;
                            hasTradeSupportLoanDebt = false;
                            residencyStatus = ResidencyStatusEnum.FOREIGNRESIDENT;
                            tfnExemptionType = TFNExemptionTypeEnum.PENSIONER;
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
                                message = "deleniti";
                            }}),
                        }};
                    }}),
                }};
            }};            

            UpdateEmployeeResponse res = sdk.payrollAu.updateEmployee(req, new UpdateEmployeeSecurity("fugit") {{
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

## updateLeaveApplication

Updates a specific leave application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLeaveApplicationRequest;
import org.openapis.openapi.models.operations.UpdateLeaveApplicationResponse;
import org.openapis.openapi.models.operations.UpdateLeaveApplicationSecurity;
import org.openapis.openapi.models.shared.LeaveApplicationInput;
import org.openapis.openapi.models.shared.LeavePeriod;
import org.openapis.openapi.models.shared.LeavePeriodStatusEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateLeaveApplicationRequest req = new UpdateLeaveApplicationRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c",                 new org.openapis.openapi.models.shared.LeaveApplicationInput[]{{
                                add(new LeaveApplicationInput() {{
                                    description = "My leave";
                                    employeeID = "fb4ebd68-6568-41eb-96ab-628a0f54b4b8";
                                    endDate = "/Date(322560000000+0000)/";
                                    leaveApplicationID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    leavePeriods = new org.openapis.openapi.models.shared.LeavePeriod[]{{
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.PROCESSED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                    }};
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    startDate = "/Date(322560000000+0000)/";
                                    title = "Annual Leave";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "nisi";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "fugit";
                                        }}),
                                    }};
                                }}),
                                add(new LeaveApplicationInput() {{
                                    description = "My leave";
                                    employeeID = "fb4ebd68-6568-41eb-96ab-628a0f54b4b8";
                                    endDate = "/Date(322560000000+0000)/";
                                    leaveApplicationID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    leavePeriods = new org.openapis.openapi.models.shared.LeavePeriod[]{{
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.PROCESSED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                    }};
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    startDate = "/Date(322560000000+0000)/";
                                    title = "Annual Leave";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "atque";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "et";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "esse";
                                        }}),
                                    }};
                                }}),
                                add(new LeaveApplicationInput() {{
                                    description = "My leave";
                                    employeeID = "fb4ebd68-6568-41eb-96ab-628a0f54b4b8";
                                    endDate = "/Date(322560000000+0000)/";
                                    leaveApplicationID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                    leavePeriods = new org.openapis.openapi.models.shared.LeavePeriod[]{{
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.PROCESSED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.SCHEDULED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                        add(new LeavePeriod() {{
                                            leavePeriodStatus = LeavePeriodStatusEnum.PROCESSED;
                                            numberOfUnits = 22.8;
                                            payPeriodEndDate = "/Date(322560000000+0000)/";
                                            payPeriodStartDate = "/Date(322560000000+0000)/";
                                        }}),
                                    }};
                                    leaveTypeID = "742998cb-7584-4ecf-aa88-d694f59c50f9";
                                    startDate = "/Date(322560000000+0000)/";
                                    title = "Annual Leave";
                                    validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                                        add(new ValidationError() {{
                                            message = "vero";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "aliquid";
                                        }}),
                                        add(new ValidationError() {{
                                            message = "quasi";
                                        }}),
                                    }};
                                }}),
                            }}, "saepe");            

            UpdateLeaveApplicationResponse res = sdk.payrollAu.updateLeaveApplication(req, new UpdateLeaveApplicationSecurity("vel") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaveApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayRun

Update properties on a single PayRun

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayRunRequest;
import org.openapis.openapi.models.operations.UpdatePayRunResponse;
import org.openapis.openapi.models.operations.UpdatePayRunSecurity;
import org.openapis.openapi.models.shared.PayRunInput;
import org.openapis.openapi.models.shared.PayRunStatusEnum;
import org.openapis.openapi.models.shared.PayslipSummaryInput;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePayRunRequest req = new UpdatePayRunRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "harum") {{
                requestBody = new org.openapis.openapi.models.shared.PayRunInput[]{{
                    add(new PayRunInput("bfac31bd-ea62-4fc8-a5e7-7965d9504b15") {{
                        deductions = 6996.22;
                        netPay = 862.5;
                        payRunID = "bba1d10f-63b1-4692-b5c5-a99f869523a4";
                        payRunPeriodEndDate = "/Date(322560000000+0000)/";
                        payRunPeriodStartDate = "/Date(322560000000+0000)/";
                        payRunStatus = PayRunStatusEnum.POSTED;
                        paymentDate = "/Date(322560000000+0000)/";
                        payrollCalendarID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                        payslipMessage = "Thanks for being awesome";
                        payslips = new org.openapis.openapi.models.shared.PayslipSummaryInput[]{{
                            add(new PayslipSummaryInput() {{
                                deductions = 7162.44;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 7567.79;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                            add(new PayslipSummaryInput() {{
                                deductions = 270.69;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 6360.61;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                        }};
                        reimbursement = 7313.98;
                        super_ = 75.6;
                        tax = 198;
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "cumque";
                            }}),
                        }};
                        wages = 1060.5;
                    }}),
                    add(new PayRunInput("bfac31bd-ea62-4fc8-a5e7-7965d9504b15") {{
                        deductions = 1605.38;
                        netPay = 862.5;
                        payRunID = "bba1d10f-63b1-4692-b5c5-a99f869523a4";
                        payRunPeriodEndDate = "/Date(322560000000+0000)/";
                        payRunPeriodStartDate = "/Date(322560000000+0000)/";
                        payRunStatus = PayRunStatusEnum.DRAFT;
                        paymentDate = "/Date(322560000000+0000)/";
                        payrollCalendarID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                        payslipMessage = "Thanks for being awesome";
                        payslips = new org.openapis.openapi.models.shared.PayslipSummaryInput[]{{
                            add(new PayslipSummaryInput() {{
                                deductions = 3082.86;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 9591.67;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                            add(new PayslipSummaryInput() {{
                                deductions = 2328.65;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 4581.39;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                            add(new PayslipSummaryInput() {{
                                deductions = 5034.27;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 5909.84;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                            add(new PayslipSummaryInput() {{
                                deductions = 9537.22;
                                employeeGroup = "Marketing";
                                employeeID = "4729f087-8eec-49c1-8294-4d11a5a0a37c";
                                firstName = "Karen";
                                lastName = "Jones";
                                netPay = 862.5;
                                payslipID = "f3c0874d-7cdd-459a-a95c-d90d51decc42";
                                reimbursements = 8577.23;
                                super_ = 75.6;
                                tax = 198;
                                wages = 1060.5;
                            }}),
                        }};
                        reimbursement = 5578.11;
                        super_ = 75.6;
                        tax = 198;
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "quasi";
                            }}),
                            add(new ValidationError() {{
                                message = "a";
                            }}),
                        }};
                        wages = 1060.5;
                    }}),
                }};
            }};            

            UpdatePayRunResponse res = sdk.payrollAu.updatePayRun(req, new UpdatePayRunSecurity("error") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayslip

Update lines on a single payslips

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayslipRequest;
import org.openapis.openapi.models.operations.UpdatePayslipResponse;
import org.openapis.openapi.models.operations.UpdatePayslipSecurity;
import org.openapis.openapi.models.shared.DeductionLine;
import org.openapis.openapi.models.shared.DeductionTypeCalculationTypeEnum;
import org.openapis.openapi.models.shared.EarningsLine;
import org.openapis.openapi.models.shared.EarningsRateCalculationTypeEnum;
import org.openapis.openapi.models.shared.LeaveAccrualLine;
import org.openapis.openapi.models.shared.LeaveEarningsLine;
import org.openapis.openapi.models.shared.ManualTaxTypeEnum;
import org.openapis.openapi.models.shared.PayslipLines;
import org.openapis.openapi.models.shared.ReimbursementLine;
import org.openapis.openapi.models.shared.SuperannuationCalculationTypeEnum;
import org.openapis.openapi.models.shared.SuperannuationContributionTypeEnum;
import org.openapis.openapi.models.shared.SuperannuationLine;
import org.openapis.openapi.models.shared.TaxLine;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePayslipRequest req = new UpdatePayslipRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "sint") {{
                requestBody = new org.openapis.openapi.models.shared.PayslipLines[]{{
                    add(new PayslipLines() {{
                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                amount = 10;
                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                numberOfUnits = 10;
                                percentage = 10;
                            }}),
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                amount = 10;
                                calculationType = DeductionTypeCalculationTypeEnum.POSTTAX;
                                deductionTypeID = "59cd9d04-4521-4cc3-93ac-7841651ff407";
                                numberOfUnits = 10;
                                percentage = 10;
                            }}),
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                amount = 10;
                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
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
                        leaveAccrualLines = new org.openapis.openapi.models.shared.LeaveAccrualLine[]{{
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                        }};
                        leaveEarningsLines = new org.openapis.openapi.models.shared.LeaveEarningsLine[]{{
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
                            }}),
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
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
                        }};
                        superannuationLines = new org.openapis.openapi.models.shared.SuperannuationLine[]{{
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                contributionType = SuperannuationContributionTypeEnum.EMPLOYEE;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                        }};
                        taxLines = new org.openapis.openapi.models.shared.TaxLine[]{{
                            add(new TaxLine() {{
                                amount = 50;
                                description = "sapiente";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.PAYGMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                            add(new TaxLine() {{
                                amount = 50;
                                description = "ullam";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.ETPRMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                        }};
                        timesheetEarningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
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
                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                fixedAmount = 2.5;
                                normalNumberOfUnits = 38;
                                numberOfUnits = 2.5;
                                numberOfUnitsPerWeek = 38;
                                ratePerUnit = 38;
                            }}),
                        }};
                    }}),
                    add(new PayslipLines() {{
                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                amount = 10;
                                calculationType = DeductionTypeCalculationTypeEnum.FIXEDAMOUNT;
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
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
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
                        }};
                        leaveAccrualLines = new org.openapis.openapi.models.shared.LeaveAccrualLine[]{{
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                        }};
                        leaveEarningsLines = new org.openapis.openapi.models.shared.LeaveEarningsLine[]{{
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
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
                        superannuationLines = new org.openapis.openapi.models.shared.SuperannuationLine[]{{
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                        }};
                        taxLines = new org.openapis.openapi.models.shared.TaxLine[]{{
                            add(new TaxLine() {{
                                amount = 50;
                                description = "veritatis";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.ETPOMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                            add(new TaxLine() {{
                                amount = 50;
                                description = "adipisci";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.SCHEDULE5_MANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                        }};
                        timesheetEarningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
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
                                calculationType = EarningsRateCalculationTypeEnum.ENTEREARNINGSRATE;
                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                fixedAmount = 2.5;
                                normalNumberOfUnits = 38;
                                numberOfUnits = 2.5;
                                numberOfUnitsPerWeek = 38;
                                ratePerUnit = 38;
                            }}),
                        }};
                    }}),
                    add(new PayslipLines() {{
                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.FIXEDAMOUNT, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
                                amount = 10;
                                calculationType = DeductionTypeCalculationTypeEnum.PRETAX;
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
                                calculationType = EarningsRateCalculationTypeEnum.USEEARNINGSRATE;
                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                fixedAmount = 2.5;
                                normalNumberOfUnits = 38;
                                numberOfUnits = 2.5;
                                numberOfUnitsPerWeek = 38;
                                ratePerUnit = 38;
                            }}),
                        }};
                        leaveAccrualLines = new org.openapis.openapi.models.shared.LeaveAccrualLine[]{{
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                        }};
                        leaveEarningsLines = new org.openapis.openapi.models.shared.LeaveEarningsLine[]{{
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
                            }}),
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
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
                        superannuationLines = new org.openapis.openapi.models.shared.SuperannuationLine[]{{
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                        }};
                        taxLines = new org.openapis.openapi.models.shared.TaxLine[]{{
                            add(new TaxLine() {{
                                amount = 50;
                                description = "dicta";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.SCHEDULE5_STSLMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                            add(new TaxLine() {{
                                amount = 50;
                                description = "natus";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.ETPOMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                        }};
                        timesheetEarningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
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
                                calculationType = EarningsRateCalculationTypeEnum.ENTEREARNINGSRATE;
                                earningsRateID = "72e962d1-fcac-4083-8a71-742bb3e7ae14";
                                fixedAmount = 2.5;
                                normalNumberOfUnits = 38;
                                numberOfUnits = 2.5;
                                numberOfUnitsPerWeek = 38;
                                ratePerUnit = 38;
                            }}),
                        }};
                    }}),
                    add(new PayslipLines() {{
                        deductionLines = new org.openapis.openapi.models.shared.DeductionLine[]{{
                            add(new DeductionLine(DeductionTypeCalculationTypeEnum.POSTTAX, "59cd9d04-4521-4cc3-93ac-7841651ff407") {{
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
                        }};
                        leaveAccrualLines = new org.openapis.openapi.models.shared.LeaveAccrualLine[]{{
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                            add(new LeaveAccrualLine() {{
                                autoCalculate = true;
                                leaveTypeID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 105.5;
                            }}),
                        }};
                        leaveEarningsLines = new org.openapis.openapi.models.shared.LeaveEarningsLine[]{{
                            add(new LeaveEarningsLine() {{
                                earningsRateID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                numberOfUnits = 2.5;
                                ratePerUnit = 38;
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
                        }};
                        superannuationLines = new org.openapis.openapi.models.shared.SuperannuationLine[]{{
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                contributionType = SuperannuationContributionTypeEnum.SALARYSACRIFICE;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.FIXEDAMOUNT;
                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.STATUTORY;
                                contributionType = SuperannuationContributionTypeEnum.EMPLOYERADDITIONAL;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                            add(new SuperannuationLine() {{
                                amount = 10.5;
                                calculationType = SuperannuationCalculationTypeEnum.PERCENTAGEOFEARNINGS;
                                contributionType = SuperannuationContributionTypeEnum.SGC;
                                expenseAccountCode = "450";
                                liabilityAccountCode = "650";
                                minimumMonthlyEarnings = 100.5;
                                paymentDateForThisPeriod = "/Date(322560000000+0000)/";
                                percentage = 4;
                                superMembershipID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                            }}),
                        }};
                        taxLines = new org.openapis.openapi.models.shared.TaxLine[]{{
                            add(new TaxLine() {{
                                amount = 50;
                                description = "est";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.SCHEDULE5_STSLMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                            add(new TaxLine() {{
                                amount = 50;
                                description = "totam";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.SCHEDULE5_STSLMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                            add(new TaxLine() {{
                                amount = 50;
                                description = "vel";
                                liabilityAccount = "620";
                                manualTaxType = ManualTaxTypeEnum.ETPRMANUAL;
                                payslipTaxLineID = "e0eb6747-7c17-4075-b804-989f8d4e5d39";
                                taxTypeName = "Manual Adjustment";
                            }}),
                        }};
                        timesheetEarningsLines = new org.openapis.openapi.models.shared.EarningsLine[]{{
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
                        }};
                    }}),
                }};
            }};            

            UpdatePayslipResponse res = sdk.payrollAu.updatePayslip(req, new UpdatePayslipSecurity("facilis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payslips != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSuperfund

Update properties on a single Superfund

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSuperfundRequest;
import org.openapis.openapi.models.operations.UpdateSuperfundResponse;
import org.openapis.openapi.models.operations.UpdateSuperfundSecurity;
import org.openapis.openapi.models.shared.SuperFundInput;
import org.openapis.openapi.models.shared.SuperFundTypeEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSuperfundRequest req = new UpdateSuperfundRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "cum") {{
                requestBody = new org.openapis.openapi.models.shared.SuperFundInput[]{{
                    add(new SuperFundInput(SuperFundTypeEnum.REGULATED) {{
                        abn = "40022701955";
                        accountName = "Money account";
                        accountNumber = "234234234";
                        bsb = "234324";
                        electronicServiceAddress = "12345678";
                        employerNumber = "324324";
                        name = "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)";
                        spin = "4545445454";
                        superFundID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                        type = SuperFundTypeEnum.REGULATED;
                        usi = "40022701955001";
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "reiciendis";
                            }}),
                            add(new ValidationError() {{
                                message = "assumenda";
                            }}),
                        }};
                    }}),
                    add(new SuperFundInput(SuperFundTypeEnum.REGULATED) {{
                        abn = "40022701955";
                        accountName = "Money account";
                        accountNumber = "234234234";
                        bsb = "234324";
                        electronicServiceAddress = "12345678";
                        employerNumber = "324324";
                        name = "MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)";
                        spin = "4545445454";
                        superFundID = "bfac31bd-ea62-4fc8-a5e7-7965d9504b15";
                        type = SuperFundTypeEnum.SMSF;
                        usi = "40022701955001";
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "aperiam";
                            }}),
                            add(new ValidationError() {{
                                message = "cum";
                            }}),
                        }};
                    }}),
                }};
            }};            

            UpdateSuperfundResponse res = sdk.payrollAu.updateSuperfund(req, new UpdateSuperfundSecurity("in") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.superFunds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTimesheet

Update properties on a single timesheet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTimesheetRequest;
import org.openapis.openapi.models.operations.UpdateTimesheetResponse;
import org.openapis.openapi.models.operations.UpdateTimesheetSecurity;
import org.openapis.openapi.models.shared.TimesheetInput;
import org.openapis.openapi.models.shared.TimesheetLineInput;
import org.openapis.openapi.models.shared.TimesheetStatusEnum;
import org.openapis.openapi.models.shared.ValidationError;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTimesheetRequest req = new UpdateTimesheetRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "exercitationem") {{
                requestBody = new org.openapis.openapi.models.shared.TimesheetInput[]{{
                    add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                        employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                        endDate = "/Date(322560000000+0000)/";
                        hours = 31;
                        startDate = "/Date(322560000000+0000)/";
                        status = TimesheetStatusEnum.REQUESTED;
                        timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                        timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                    add(3),
                                    add(3),
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                        }};
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "quidem";
                            }}),
                            add(new ValidationError() {{
                                message = "saepe";
                            }}),
                            add(new ValidationError() {{
                                message = "necessitatibus";
                            }}),
                            add(new ValidationError() {{
                                message = "dolore";
                            }}),
                        }};
                    }}),
                    add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                        employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                        endDate = "/Date(322560000000+0000)/";
                        hours = 31;
                        startDate = "/Date(322560000000+0000)/";
                        status = TimesheetStatusEnum.DRAFT;
                        timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                        timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                        }};
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "a";
                            }}),
                            add(new ValidationError() {{
                                message = "debitis";
                            }}),
                        }};
                    }}),
                    add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                        employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                        endDate = "/Date(322560000000+0000)/";
                        hours = 31;
                        startDate = "/Date(322560000000+0000)/";
                        status = TimesheetStatusEnum.PROCESSED;
                        timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                        timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                    add(3),
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                        }};
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "voluptates";
                            }}),
                        }};
                    }}),
                    add(new TimesheetInput("72a0d0c2-0cf8-4f0b-ade1-33231f47b41b", "/Date(322560000000+0000)/", "/Date(322560000000+0000)/") {{
                        employeeID = "72a0d0c2-0cf8-4f0b-ade1-33231f47b41b";
                        endDate = "/Date(322560000000+0000)/";
                        hours = 31;
                        startDate = "/Date(322560000000+0000)/";
                        status = TimesheetStatusEnum.REJECTED;
                        timesheetID = "049765fc-4506-48fb-bf88-3578dec0ec47";
                        timesheetLines = new org.openapis.openapi.models.shared.TimesheetLineInput[]{{
                            add(new TimesheetLineInput() {{
                                earningsRateID = "966c5c77-2ef0-4320-b6a9-6c27b080ecc5";
                                numberOfUnits = new Double[]{{
                                    add(3),
                                    add(3),
                                    add(3),
                                    add(3),
                                }};
                                trackingItemID = "ae777a87-5ef3-4fa0-a4f0-d10e1f13073a";
                            }}),
                        }};
                        validationErrors = new org.openapis.openapi.models.shared.ValidationError[]{{
                            add(new ValidationError() {{
                                message = "tempora";
                            }}),
                            add(new ValidationError() {{
                                message = "aspernatur";
                            }}),
                            add(new ValidationError() {{
                                message = "voluptas";
                            }}),
                        }};
                    }}),
                }};
            }};            

            UpdateTimesheetResponse res = sdk.payrollAu.updateTimesheet(req, new UpdateTimesheetSecurity("voluptas") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.timesheets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
