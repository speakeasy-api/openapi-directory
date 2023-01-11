package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportMeetingParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public ReportMeetingParticipantsPathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}