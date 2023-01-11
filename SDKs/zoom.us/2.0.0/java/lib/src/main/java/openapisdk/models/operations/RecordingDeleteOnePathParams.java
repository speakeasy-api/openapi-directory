package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingDeleteOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingDeleteOnePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recordingId")
    public String recordingId;
    public RecordingDeleteOnePathParams withRecordingId(String recordingId) {
        this.recordingId = recordingId;
        return this;
    }
}