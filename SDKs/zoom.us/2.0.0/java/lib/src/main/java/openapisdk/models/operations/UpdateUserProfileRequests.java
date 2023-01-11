package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserProfileRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateUserProfileApplicationJson object;
    public UpdateUserProfileRequests withObject(UpdateUserProfileApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateUserProfileMultipartFormData object1;
    public UpdateUserProfileRequests withObject1(UpdateUserProfileMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}