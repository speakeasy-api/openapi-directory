package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public DashboardMeetingParticipantSharePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}