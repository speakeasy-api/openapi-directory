package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingUpdatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}