package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingRegistrantCreateApplicationJson object;
    public MeetingRegistrantCreateRequests withObject(MeetingRegistrantCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingRegistrantCreateMultipartFormData1 object1;
    public MeetingRegistrantCreateRequests withObject1(MeetingRegistrantCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}