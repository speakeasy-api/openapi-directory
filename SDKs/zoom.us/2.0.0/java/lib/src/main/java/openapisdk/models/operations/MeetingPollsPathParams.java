package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPollsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingPollsPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}