package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallQueueRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCallQueueApplicationJson object;
    public UpdateCallQueueRequests withObject(UpdateCallQueueApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateCallQueueMultipartFormData object1;
    public UpdateCallQueueRequests withObject1(UpdateCallQueueMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}