package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayslipSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deductions")
    public Double deductions;
    public PayslipSummary withDeductions(Double deductions) {
        this.deductions = deductions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeGroup")
    public String employeeGroup;
    public PayslipSummary withEmployeeGroup(String employeeGroup) {
        this.employeeGroup = employeeGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeID")
    public String employeeID;
    public PayslipSummary withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public PayslipSummary withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public PayslipSummary withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetPay")
    public Double netPay;
    public PayslipSummary withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayslipID")
    public String payslipID;
    public PayslipSummary withPayslipId(String payslipID) {
        this.payslipID = payslipID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reimbursements")
    public Double reimbursements;
    public PayslipSummary withReimbursements(Double reimbursements) {
        this.reimbursements = reimbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Super")
    public Double super_;
    public PayslipSummary withSuper(Double super_) {
        this.super_ = super_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tax")
    public Double tax;
    public PayslipSummary withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public PayslipSummary withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wages")
    public Double wages;
    public PayslipSummary withWages(Double wages) {
        this.wages = wages;
        return this;
    }
}