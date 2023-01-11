package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanAddonUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountPlanAddonUpdateApplicationJson object;
    public AccountPlanAddonUpdateRequests withObject(AccountPlanAddonUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountPlanAddonUpdateMultipartFormData object1;
    public AccountPlanAddonUpdateRequests withObject1(AccountPlanAddonUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}