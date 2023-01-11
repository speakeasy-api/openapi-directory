package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserUpdateApplicationJson object;
    public UserUpdateRequests withObject(UserUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserUpdateMultipartFormData object1;
    public UserUpdateRequests withObject1(UserUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}