package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddByocNumberRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddByocNumberApplicationJson object;
    public AddByocNumberRequests withObject(AddByocNumberApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddByocNumberMultipartFormData object1;
    public AddByocNumberRequests withObject1(AddByocNumberMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}