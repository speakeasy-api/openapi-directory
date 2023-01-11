package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountOptionsUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountOptionsUpdateApplicationJson object;
    public AccountOptionsUpdateRequests withObject(AccountOptionsUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountOptionsUpdateMultipartFormData object1;
    public AccountOptionsUpdateRequests withObject1(AccountOptionsUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}