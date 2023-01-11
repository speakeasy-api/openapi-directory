package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InMeetingRecordingControlRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InMeetingRecordingControlApplicationJson object;
    public InMeetingRecordingControlRequests withObject(InMeetingRecordingControlApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public InMeetingRecordingControlMultipartFormData object1;
    public InMeetingRecordingControlRequests withObject1(InMeetingRecordingControlMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}