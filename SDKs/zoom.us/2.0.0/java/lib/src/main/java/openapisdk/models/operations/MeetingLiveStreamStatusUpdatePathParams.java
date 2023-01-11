package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingLiveStreamStatusUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingLiveStreamStatusUpdatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}