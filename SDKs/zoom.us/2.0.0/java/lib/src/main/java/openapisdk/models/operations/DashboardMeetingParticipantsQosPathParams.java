package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantsQosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public DashboardMeetingParticipantsQosPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}