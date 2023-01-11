package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingLiveStreamUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingLiveStreamUpdatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}