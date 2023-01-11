package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimesheetInput {
    @JsonProperty("EmployeeID")
    public String employeeID;
    public TimesheetInput withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonProperty("EndDate")
    public String endDate;
    public TimesheetInput withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hours")
    public Double hours;
    public TimesheetInput withHours(Double hours) {
        this.hours = hours;
        return this;
    }
    @JsonProperty("StartDate")
    public String startDate;
    public TimesheetInput withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TimesheetStatusEnum status;
    public TimesheetInput withStatus(TimesheetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimesheetID")
    public String timesheetID;
    public TimesheetInput withTimesheetId(String timesheetID) {
        this.timesheetID = timesheetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimesheetLines")
    public TimesheetLineInput[] timesheetLines;
    public TimesheetInput withTimesheetLines(TimesheetLineInput[] timesheetLines) {
        this.timesheetLines = timesheetLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public TimesheetInput withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}