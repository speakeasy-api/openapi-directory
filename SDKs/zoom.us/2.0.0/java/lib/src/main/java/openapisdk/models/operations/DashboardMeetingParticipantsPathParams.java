package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public DashboardMeetingParticipantsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}