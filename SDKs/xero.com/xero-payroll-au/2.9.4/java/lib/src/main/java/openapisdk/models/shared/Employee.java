package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Employee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankAccounts")
    public BankAccount[] bankAccounts;
    public Employee withBankAccounts(BankAccount[] bankAccounts) {
        this.bankAccounts = bankAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classification")
    public String classification;
    public Employee withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("DateOfBirth")
    public String dateOfBirth;
    public Employee withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public Employee withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeGroupName")
    public String employeeGroupName;
    public Employee withEmployeeGroupName(String employeeGroupName) {
        this.employeeGroupName = employeeGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeID")
    public String employeeID;
    public Employee withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonProperty("FirstName")
    public String firstName;
    public Employee withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public EmployeeGenderEnum gender;
    public Employee withGender(EmployeeGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeAddress")
    public HomeAddress homeAddress;
    public Employee withHomeAddress(HomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAuthorisedToApproveLeave")
    public Boolean isAuthorisedToApproveLeave;
    public Employee withIsAuthorisedToApproveLeave(Boolean isAuthorisedToApproveLeave) {
        this.isAuthorisedToApproveLeave = isAuthorisedToApproveLeave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAuthorisedToApproveTimesheets")
    public Boolean isAuthorisedToApproveTimesheets;
    public Employee withIsAuthorisedToApproveTimesheets(Boolean isAuthorisedToApproveTimesheets) {
        this.isAuthorisedToApproveTimesheets = isAuthorisedToApproveTimesheets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTitle")
    public String jobTitle;
    public Employee withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonProperty("LastName")
    public String lastName;
    public Employee withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveBalances")
    public LeaveBalance[] leaveBalances;
    public Employee withLeaveBalances(LeaveBalance[] leaveBalances) {
        this.leaveBalances = leaveBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveLines")
    public LeaveLine[] leaveLines;
    public Employee withLeaveLines(LeaveLine[] leaveLines) {
        this.leaveLines = leaveLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleNames")
    public String middleNames;
    public Employee withMiddleNames(String middleNames) {
        this.middleNames = middleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mobile")
    public String mobile;
    public Employee withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningBalances")
    public OpeningBalances openingBalances;
    public Employee withOpeningBalances(OpeningBalances openingBalances) {
        this.openingBalances = openingBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrdinaryEarningsRateID")
    public String ordinaryEarningsRateID;
    public Employee withOrdinaryEarningsRateId(String ordinaryEarningsRateID) {
        this.ordinaryEarningsRateID = ordinaryEarningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayTemplate")
    public PayTemplate payTemplate;
    public Employee withPayTemplate(PayTemplate payTemplate) {
        this.payTemplate = payTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayrollCalendarID")
    public String payrollCalendarID;
    public Employee withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public Employee withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public Employee withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EmployeeStatusEnum status;
    public Employee withStatus(EmployeeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperMemberships")
    public SuperMembership[] superMemberships;
    public Employee withSuperMemberships(SuperMembership[] superMemberships) {
        this.superMemberships = superMemberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxDeclaration")
    public TaxDeclaration taxDeclaration;
    public Employee withTaxDeclaration(TaxDeclaration taxDeclaration) {
        this.taxDeclaration = taxDeclaration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminationDate")
    public String terminationDate;
    public Employee withTerminationDate(String terminationDate) {
        this.terminationDate = terminationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public Employee withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TwitterUserName")
    public String twitterUserName;
    public Employee withTwitterUserName(String twitterUserName) {
        this.twitterUserName = twitterUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public Employee withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public Employee withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}