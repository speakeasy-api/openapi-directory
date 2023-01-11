package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserEmailUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserEmailUpdateApplicationJson object;
    public UserEmailUpdateRequests withObject(UserEmailUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserEmailUpdateMultipartFormData object1;
    public UserEmailUpdateRequests withObject1(UserEmailUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}