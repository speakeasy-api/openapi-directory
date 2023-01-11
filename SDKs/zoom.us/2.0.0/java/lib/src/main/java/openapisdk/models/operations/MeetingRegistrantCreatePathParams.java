package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRegistrantCreatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}