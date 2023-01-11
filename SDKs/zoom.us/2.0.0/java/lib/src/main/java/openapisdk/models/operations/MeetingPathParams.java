package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}