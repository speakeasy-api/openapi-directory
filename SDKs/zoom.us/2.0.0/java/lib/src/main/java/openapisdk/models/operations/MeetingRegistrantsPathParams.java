package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingRegistrantsPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}