package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingStatusUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingStatusUpdatePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}