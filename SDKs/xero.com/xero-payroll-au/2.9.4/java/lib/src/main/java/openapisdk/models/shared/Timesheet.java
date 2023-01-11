package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Timesheet {
    @JsonProperty("EmployeeID")
    public String employeeID;
    public Timesheet withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonProperty("EndDate")
    public String endDate;
    public Timesheet withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hours")
    public Double hours;
    public Timesheet withHours(Double hours) {
        this.hours = hours;
        return this;
    }
    @JsonProperty("StartDate")
    public String startDate;
    public Timesheet withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TimesheetStatusEnum status;
    public Timesheet withStatus(TimesheetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimesheetID")
    public String timesheetID;
    public Timesheet withTimesheetId(String timesheetID) {
        this.timesheetID = timesheetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimesheetLines")
    public TimesheetLine[] timesheetLines;
    public Timesheet withTimesheetLines(TimesheetLine[] timesheetLines) {
        this.timesheetLines = timesheetLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public Timesheet withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public Timesheet withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}