package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanAddonUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountPlanAddonUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}