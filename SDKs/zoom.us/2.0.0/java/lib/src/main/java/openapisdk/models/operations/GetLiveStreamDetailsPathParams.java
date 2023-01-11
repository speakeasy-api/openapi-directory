package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLiveStreamDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public GetLiveStreamDetailsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}