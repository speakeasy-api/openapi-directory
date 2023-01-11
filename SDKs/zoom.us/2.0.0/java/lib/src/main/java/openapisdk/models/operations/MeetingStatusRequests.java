package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingStatusApplicationJson object;
    public MeetingStatusRequests withObject(MeetingStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingStatusMultipartFormData object1;
    public MeetingStatusRequests withObject1(MeetingStatusMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}