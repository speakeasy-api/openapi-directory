package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAnumberToBlockedListRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddAnumberToBlockedListApplicationJson object;
    public AddAnumberToBlockedListRequests withObject(AddAnumberToBlockedListApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddAnumberToBlockedListMultipartFormData object1;
    public AddAnumberToBlockedListRequests withObject1(AddAnumberToBlockedListMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}