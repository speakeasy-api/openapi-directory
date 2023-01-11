package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRegistrantStatusPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}