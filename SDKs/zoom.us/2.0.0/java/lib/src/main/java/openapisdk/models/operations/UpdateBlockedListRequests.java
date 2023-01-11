package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBlockedListRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBlockedListApplicationJson object;
    public UpdateBlockedListRequests withObject(UpdateBlockedListApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateBlockedListMultipartFormData object1;
    public UpdateBlockedListRequests withObject1(UpdateBlockedListMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}