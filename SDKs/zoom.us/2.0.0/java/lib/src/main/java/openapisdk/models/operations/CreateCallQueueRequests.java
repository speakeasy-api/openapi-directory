package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallQueueRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCallQueueApplicationJson object;
    public CreateCallQueueRequests withObject(CreateCallQueueApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateCallQueueMultipartFormData object1;
    public CreateCallQueueRequests withObject1(CreateCallQueueMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}