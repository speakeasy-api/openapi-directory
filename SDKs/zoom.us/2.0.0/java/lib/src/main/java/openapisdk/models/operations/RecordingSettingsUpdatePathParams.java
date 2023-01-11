package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingSettingsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meetingId")
    public String meetingId;
    public RecordingSettingsUpdatePathParams withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
}