package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PastMeetingDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingUUID")
    public String meetingUUID;
    public PastMeetingDetailsPathParams withMeetingUuid(String meetingUUID) {
        this.meetingUUID = meetingUUID;
        return this;
    }
}