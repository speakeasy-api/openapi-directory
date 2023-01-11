package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountPlanCreateApplicationJson object;
    public AccountPlanCreateRequests withObject(AccountPlanCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountPlanCreateMultipartFormData1 object1;
    public AccountPlanCreateRequests withObject1(AccountPlanCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}