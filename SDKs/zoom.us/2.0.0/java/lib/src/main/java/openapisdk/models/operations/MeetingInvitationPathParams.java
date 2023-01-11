package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingInvitationPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}