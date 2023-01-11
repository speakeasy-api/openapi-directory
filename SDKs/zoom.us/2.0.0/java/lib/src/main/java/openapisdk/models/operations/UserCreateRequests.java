package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserCreateApplicationJson object;
    public UserCreateRequests withObject(UserCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserCreateMultipartFormData object1;
    public UserCreateRequests withObject1(UserCreateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}