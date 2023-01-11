package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRecordingRegistrantCreatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}