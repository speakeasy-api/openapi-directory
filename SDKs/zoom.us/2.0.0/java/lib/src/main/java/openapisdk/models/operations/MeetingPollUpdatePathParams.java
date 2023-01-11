package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPollUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingPollUpdatePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pollId")
    public String pollId;
    public MeetingPollUpdatePathParams withPollId(String pollId) {
        this.pollId = pollId;
        return this;
    }
}