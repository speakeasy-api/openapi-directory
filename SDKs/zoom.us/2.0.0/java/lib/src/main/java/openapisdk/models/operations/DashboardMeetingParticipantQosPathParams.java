package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantQosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public DashboardMeetingParticipantQosPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=participantId")
    public String participantId;
    public DashboardMeetingParticipantQosPathParams withParticipantId(String participantId) {
        this.participantId = participantId;
        return this;
    }
}