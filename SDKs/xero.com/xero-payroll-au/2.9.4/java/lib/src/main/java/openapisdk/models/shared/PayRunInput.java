package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayRunInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deductions")
    public Double deductions;
    public PayRunInput withDeductions(Double deductions) {
        this.deductions = deductions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetPay")
    public Double netPay;
    public PayRunInput withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunID")
    public String payRunID;
    public PayRunInput withPayRunId(String payRunID) {
        this.payRunID = payRunID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunPeriodEndDate")
    public String payRunPeriodEndDate;
    public PayRunInput withPayRunPeriodEndDate(String payRunPeriodEndDate) {
        this.payRunPeriodEndDate = payRunPeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunPeriodStartDate")
    public String payRunPeriodStartDate;
    public PayRunInput withPayRunPeriodStartDate(String payRunPeriodStartDate) {
        this.payRunPeriodStartDate = payRunPeriodStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunStatus")
    public PayRunStatusEnum payRunStatus;
    public PayRunInput withPayRunStatus(PayRunStatusEnum payRunStatus) {
        this.payRunStatus = payRunStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public String paymentDate;
    public PayRunInput withPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonProperty("PayrollCalendarID")
    public String payrollCalendarID;
    public PayRunInput withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayslipMessage")
    public String payslipMessage;
    public PayRunInput withPayslipMessage(String payslipMessage) {
        this.payslipMessage = payslipMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payslips")
    public PayslipSummaryInput[] payslips;
    public PayRunInput withPayslips(PayslipSummaryInput[] payslips) {
        this.payslips = payslips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reimbursement")
    public Double reimbursement;
    public PayRunInput withReimbursement(Double reimbursement) {
        this.reimbursement = reimbursement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Super")
    public Double super_;
    public PayRunInput withSuper(Double super_) {
        this.super_ = super_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tax")
    public Double tax;
    public PayRunInput withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public PayRunInput withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wages")
    public Double wages;
    public PayRunInput withWages(Double wages) {
        this.wages = wages;
        return this;
    }
}