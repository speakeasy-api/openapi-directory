package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankAccounts")
    public BankAccount[] bankAccounts;
    public EmployeeInput withBankAccounts(BankAccount[] bankAccounts) {
        this.bankAccounts = bankAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classification")
    public String classification;
    public EmployeeInput withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("DateOfBirth")
    public String dateOfBirth;
    public EmployeeInput withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public EmployeeInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeGroupName")
    public String employeeGroupName;
    public EmployeeInput withEmployeeGroupName(String employeeGroupName) {
        this.employeeGroupName = employeeGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeID")
    public String employeeID;
    public EmployeeInput withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonProperty("FirstName")
    public String firstName;
    public EmployeeInput withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public EmployeeGenderEnum gender;
    public EmployeeInput withGender(EmployeeGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeAddress")
    public HomeAddress homeAddress;
    public EmployeeInput withHomeAddress(HomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAuthorisedToApproveLeave")
    public Boolean isAuthorisedToApproveLeave;
    public EmployeeInput withIsAuthorisedToApproveLeave(Boolean isAuthorisedToApproveLeave) {
        this.isAuthorisedToApproveLeave = isAuthorisedToApproveLeave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAuthorisedToApproveTimesheets")
    public Boolean isAuthorisedToApproveTimesheets;
    public EmployeeInput withIsAuthorisedToApproveTimesheets(Boolean isAuthorisedToApproveTimesheets) {
        this.isAuthorisedToApproveTimesheets = isAuthorisedToApproveTimesheets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTitle")
    public String jobTitle;
    public EmployeeInput withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonProperty("LastName")
    public String lastName;
    public EmployeeInput withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveBalances")
    public LeaveBalance[] leaveBalances;
    public EmployeeInput withLeaveBalances(LeaveBalance[] leaveBalances) {
        this.leaveBalances = leaveBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveLines")
    public LeaveLine[] leaveLines;
    public EmployeeInput withLeaveLines(LeaveLine[] leaveLines) {
        this.leaveLines = leaveLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleNames")
    public String middleNames;
    public EmployeeInput withMiddleNames(String middleNames) {
        this.middleNames = middleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mobile")
    public String mobile;
    public EmployeeInput withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningBalances")
    public OpeningBalances openingBalances;
    public EmployeeInput withOpeningBalances(OpeningBalances openingBalances) {
        this.openingBalances = openingBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrdinaryEarningsRateID")
    public String ordinaryEarningsRateID;
    public EmployeeInput withOrdinaryEarningsRateId(String ordinaryEarningsRateID) {
        this.ordinaryEarningsRateID = ordinaryEarningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayTemplate")
    public PayTemplate payTemplate;
    public EmployeeInput withPayTemplate(PayTemplate payTemplate) {
        this.payTemplate = payTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayrollCalendarID")
    public String payrollCalendarID;
    public EmployeeInput withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public EmployeeInput withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public EmployeeInput withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EmployeeStatusEnum status;
    public EmployeeInput withStatus(EmployeeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperMemberships")
    public SuperMembership[] superMemberships;
    public EmployeeInput withSuperMemberships(SuperMembership[] superMemberships) {
        this.superMemberships = superMemberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxDeclaration")
    public TaxDeclarationInput taxDeclaration;
    public EmployeeInput withTaxDeclaration(TaxDeclarationInput taxDeclaration) {
        this.taxDeclaration = taxDeclaration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminationDate")
    public String terminationDate;
    public EmployeeInput withTerminationDate(String terminationDate) {
        this.terminationDate = terminationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public EmployeeInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TwitterUserName")
    public String twitterUserName;
    public EmployeeInput withTwitterUserName(String twitterUserName) {
        this.twitterUserName = twitterUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public EmployeeInput withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}