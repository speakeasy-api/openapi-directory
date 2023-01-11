package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingDeletePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}