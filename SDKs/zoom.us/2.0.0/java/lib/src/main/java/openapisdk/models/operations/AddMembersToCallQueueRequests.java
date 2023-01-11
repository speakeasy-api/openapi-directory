package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToCallQueueRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddMembersToCallQueueApplicationJson object;
    public AddMembersToCallQueueRequests withObject(AddMembersToCallQueueApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddMembersToCallQueueMultipartFormData object1;
    public AddMembersToCallQueueRequests withObject1(AddMembersToCallQueueMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}