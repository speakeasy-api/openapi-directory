package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingRegistrantStatusApplicationJson object;
    public MeetingRegistrantStatusRequests withObject(MeetingRegistrantStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingRegistrantStatusMultipartFormData1 object1;
    public MeetingRegistrantStatusRequests withObject1(MeetingRegistrantStatusMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}