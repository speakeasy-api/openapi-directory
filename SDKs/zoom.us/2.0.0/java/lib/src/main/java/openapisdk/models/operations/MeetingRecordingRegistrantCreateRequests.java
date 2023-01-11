package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingRecordingRegistrantCreateApplicationJson object;
    public MeetingRecordingRegistrantCreateRequests withObject(MeetingRecordingRegistrantCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingRecordingRegistrantCreateMultipartFormData1 object1;
    public MeetingRecordingRegistrantCreateRequests withObject1(MeetingRecordingRegistrantCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}