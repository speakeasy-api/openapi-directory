package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZrLocationRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeZrLocationApplicationJson object;
    public ChangeZrLocationRequests withObject(ChangeZrLocationApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ChangeZrLocationMultipartFormData object1;
    public ChangeZrLocationRequests withObject1(ChangeZrLocationMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}