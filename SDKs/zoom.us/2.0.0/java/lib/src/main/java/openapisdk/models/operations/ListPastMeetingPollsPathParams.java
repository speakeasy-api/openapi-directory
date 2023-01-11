package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPastMeetingPollsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public ListPastMeetingPollsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}