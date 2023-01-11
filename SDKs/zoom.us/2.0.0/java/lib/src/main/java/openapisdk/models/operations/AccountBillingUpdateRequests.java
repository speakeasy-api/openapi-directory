package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountBillingUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountBillingUpdateApplicationJson object;
    public AccountBillingUpdateRequests withObject(AccountBillingUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountBillingUpdateMultipartFormData object1;
    public AccountBillingUpdateRequests withObject1(AccountBillingUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}