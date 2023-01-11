package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingRegistrantsQuestionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingRegistrantsQuestionsGetPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}