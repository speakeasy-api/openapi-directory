package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingStatusPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}