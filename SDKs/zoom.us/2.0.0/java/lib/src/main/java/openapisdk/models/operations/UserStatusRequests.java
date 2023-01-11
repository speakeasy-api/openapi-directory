package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserStatusApplicationJson object;
    public UserStatusRequests withObject(UserStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserStatusMultipartFormData object1;
    public UserStatusRequests withObject1(UserStatusMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}