package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParticipantFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public ParticipantFeedbackPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}