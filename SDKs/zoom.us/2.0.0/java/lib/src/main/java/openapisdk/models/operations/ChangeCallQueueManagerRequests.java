package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeCallQueueManagerRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeCallQueueManagerApplicationJson object;
    public ChangeCallQueueManagerRequests withObject(ChangeCallQueueManagerApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ChangeCallQueueManagerMultipartFormData object1;
    public ChangeCallQueueManagerRequests withObject1(ChangeCallQueueManagerMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}