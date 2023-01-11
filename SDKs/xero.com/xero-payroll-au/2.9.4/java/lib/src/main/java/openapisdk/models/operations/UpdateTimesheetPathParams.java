package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTimesheetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TimesheetID")
    public String timesheetID;
    public UpdateTimesheetPathParams withTimesheetId(String timesheetID) {
        this.timesheetID = timesheetID;
        return this;
    }
}