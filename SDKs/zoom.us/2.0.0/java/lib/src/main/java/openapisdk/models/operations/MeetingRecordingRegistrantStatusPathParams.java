package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRecordingRegistrantStatusPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}