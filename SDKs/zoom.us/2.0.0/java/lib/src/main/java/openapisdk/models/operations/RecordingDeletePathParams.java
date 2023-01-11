package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingDeletePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}