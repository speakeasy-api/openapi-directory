package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanAddonCancelRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountPlanAddonCancelApplicationJson object;
    public AccountPlanAddonCancelRequests withObject(AccountPlanAddonCancelApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountPlanAddonCancelMultipartFormData object1;
    public AccountPlanAddonCancelRequests withObject1(AccountPlanAddonCancelMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}