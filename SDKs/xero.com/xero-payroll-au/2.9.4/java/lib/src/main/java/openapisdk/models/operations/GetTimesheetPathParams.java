package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimesheetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TimesheetID")
    public String timesheetID;
    public GetTimesheetPathParams withTimesheetId(String timesheetID) {
        this.timesheetID = timesheetID;
        return this;
    }
}