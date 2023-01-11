package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PastMeetingParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingUUID")
    public String meetingUUID;
    public PastMeetingParticipantsPathParams withMeetingUuid(String meetingUUID) {
        this.meetingUUID = meetingUUID;
        return this;
    }
}