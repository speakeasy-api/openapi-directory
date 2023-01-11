package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanBaseUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountPlanBaseUpdateApplicationJson object;
    public AccountPlanBaseUpdateRequests withObject(AccountPlanBaseUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountPlanBaseUpdateMultipartFormData object1;
    public AccountPlanBaseUpdateRequests withObject1(AccountPlanBaseUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}