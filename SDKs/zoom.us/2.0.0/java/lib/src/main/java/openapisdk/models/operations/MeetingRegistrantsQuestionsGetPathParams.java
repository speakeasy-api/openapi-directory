package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantsQuestionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRegistrantsQuestionsGetPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}