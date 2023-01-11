package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveApplicationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LeaveApplicationInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeID")
    public String employeeID;
    public LeaveApplicationInput withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;
    public LeaveApplicationInput withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveApplicationID")
    public String leaveApplicationID;
    public LeaveApplicationInput withLeaveApplicationId(String leaveApplicationID) {
        this.leaveApplicationID = leaveApplicationID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeavePeriods")
    public LeavePeriod[] leavePeriods;
    public LeaveApplicationInput withLeavePeriods(LeavePeriod[] leavePeriods) {
        this.leavePeriods = leavePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveApplicationInput withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public LeaveApplicationInput withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public LeaveApplicationInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public LeaveApplicationInput withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}