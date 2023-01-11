package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deductions")
    public Double deductions;
    public PayRun withDeductions(Double deductions) {
        this.deductions = deductions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetPay")
    public Double netPay;
    public PayRun withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunID")
    public String payRunID;
    public PayRun withPayRunId(String payRunID) {
        this.payRunID = payRunID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunPeriodEndDate")
    public String payRunPeriodEndDate;
    public PayRun withPayRunPeriodEndDate(String payRunPeriodEndDate) {
        this.payRunPeriodEndDate = payRunPeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunPeriodStartDate")
    public String payRunPeriodStartDate;
    public PayRun withPayRunPeriodStartDate(String payRunPeriodStartDate) {
        this.payRunPeriodStartDate = payRunPeriodStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunStatus")
    public PayRunStatusEnum payRunStatus;
    public PayRun withPayRunStatus(PayRunStatusEnum payRunStatus) {
        this.payRunStatus = payRunStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public String paymentDate;
    public PayRun withPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonProperty("PayrollCalendarID")
    public String payrollCalendarID;
    public PayRun withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayslipMessage")
    public String payslipMessage;
    public PayRun withPayslipMessage(String payslipMessage) {
        this.payslipMessage = payslipMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payslips")
    public PayslipSummary[] payslips;
    public PayRun withPayslips(PayslipSummary[] payslips) {
        this.payslips = payslips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reimbursement")
    public Double reimbursement;
    public PayRun withReimbursement(Double reimbursement) {
        this.reimbursement = reimbursement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Super")
    public Double super_;
    public PayRun withSuper(Double super_) {
        this.super_ = super_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tax")
    public Double tax;
    public PayRun withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public PayRun withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public PayRun withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wages")
    public Double wages;
    public PayRun withWages(Double wages) {
        this.wages = wages;
        return this;
    }
}