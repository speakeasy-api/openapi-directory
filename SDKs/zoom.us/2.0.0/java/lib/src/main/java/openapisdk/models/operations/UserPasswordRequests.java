package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPasswordRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserPasswordApplicationJson object;
    public UserPasswordRequests withObject(UserPasswordApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserPasswordMultipartFormData object1;
    public UserPasswordRequests withObject1(UserPasswordMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}