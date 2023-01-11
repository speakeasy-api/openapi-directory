package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimesheetObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timesheet")
    public Timesheet timesheet;
    public TimesheetObject withTimesheet(Timesheet timesheet) {
        this.timesheet = timesheet;
        return this;
    }
}