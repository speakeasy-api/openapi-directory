package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingRegistrantQuestionUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingRegistrantQuestionUpdatePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}