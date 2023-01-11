package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchPollsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public CreateBatchPollsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}