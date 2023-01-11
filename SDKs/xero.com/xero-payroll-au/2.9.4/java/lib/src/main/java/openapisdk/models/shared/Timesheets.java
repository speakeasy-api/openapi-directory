package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Timesheets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timesheets")
    public Timesheet[] timesheets;
    public Timesheets withTimesheets(Timesheet[] timesheets) {
        this.timesheets = timesheets;
        return this;
    }
}