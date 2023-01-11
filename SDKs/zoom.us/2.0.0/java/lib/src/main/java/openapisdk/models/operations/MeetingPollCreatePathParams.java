package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPollCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingPollCreatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}