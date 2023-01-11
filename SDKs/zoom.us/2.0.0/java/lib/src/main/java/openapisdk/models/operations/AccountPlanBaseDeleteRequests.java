package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanBaseDeleteRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountPlanBaseDeleteApplicationJson object;
    public AccountPlanBaseDeleteRequests withObject(AccountPlanBaseDeleteApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountPlanBaseDeleteMultipartFormData object1;
    public AccountPlanBaseDeleteRequests withObject1(AccountPlanBaseDeleteMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}