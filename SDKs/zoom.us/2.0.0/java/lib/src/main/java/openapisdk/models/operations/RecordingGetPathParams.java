package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingGetPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}