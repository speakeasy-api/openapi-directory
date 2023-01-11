package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantQuestionUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRegistrantQuestionUpdatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}