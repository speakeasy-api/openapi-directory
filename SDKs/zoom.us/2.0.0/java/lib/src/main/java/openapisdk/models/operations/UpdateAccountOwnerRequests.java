package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountOwnerRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAccountOwnerApplicationJson object;
    public UpdateAccountOwnerRequests withObject(UpdateAccountOwnerApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateAccountOwnerMultipartFormData object1;
    public UpdateAccountOwnerRequests withObject1(UpdateAccountOwnerMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}