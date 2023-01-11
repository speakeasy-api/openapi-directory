package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportMeetingDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public ReportMeetingDetailsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}