package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingUpdateApplicationJson object;
    public MeetingUpdateRequests withObject(MeetingUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingUpdateMultipartFormData1 object1;
    public MeetingUpdateRequests withObject1(MeetingUpdateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}