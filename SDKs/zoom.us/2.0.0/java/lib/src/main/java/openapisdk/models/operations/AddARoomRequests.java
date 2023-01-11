package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddARoomRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddARoomApplicationJson object;
    public AddARoomRequests withObject(AddARoomApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddARoomMultipartFormData object1;
    public AddARoomRequests withObject1(AddARoomMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}