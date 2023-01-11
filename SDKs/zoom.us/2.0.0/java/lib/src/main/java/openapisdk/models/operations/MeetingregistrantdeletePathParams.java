package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingregistrantdeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public Long meetingId;
    public MeetingregistrantdeletePathParams withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrantId")
    public String registrantId;
    public MeetingregistrantdeletePathParams withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
}