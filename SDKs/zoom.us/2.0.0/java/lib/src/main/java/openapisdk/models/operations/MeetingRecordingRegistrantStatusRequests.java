package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingRecordingRegistrantStatusApplicationJson object;
    public MeetingRecordingRegistrantStatusRequests withObject(MeetingRecordingRegistrantStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingRecordingRegistrantStatusMultipartFormData object1;
    public MeetingRecordingRegistrantStatusRequests withObject1(MeetingRecordingRegistrantStatusMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}