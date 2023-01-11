package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPastMeetingFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public ListPastMeetingFilesPathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}