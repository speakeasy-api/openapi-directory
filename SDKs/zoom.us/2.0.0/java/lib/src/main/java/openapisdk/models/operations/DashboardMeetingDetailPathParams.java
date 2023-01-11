package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public DashboardMeetingDetailPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}