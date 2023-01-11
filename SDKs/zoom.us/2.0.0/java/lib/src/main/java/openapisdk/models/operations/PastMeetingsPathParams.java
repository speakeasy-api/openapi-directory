package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PastMeetingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public PastMeetingsPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}