package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingStatusUpdateOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingStatusUpdateOnePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recordingId")
    public String recordingId;
    public RecordingStatusUpdateOnePathParams withRecordingId(String recordingId) {
        this.recordingId = recordingId;
        return this;
    }
}