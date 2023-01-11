package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAzrLocationRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddAzrLocationApplicationJson object;
    public AddAzrLocationRequests withObject(AddAzrLocationApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddAzrLocationMultipartFormData object1;
    public AddAzrLocationRequests withObject1(AddAzrLocationMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}