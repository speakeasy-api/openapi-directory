package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InMeetingRecordingControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public InMeetingRecordingControlPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}