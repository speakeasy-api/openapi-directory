package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingSettingUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingSettingUpdatePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}