package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanAddonCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountPlanAddonCancelPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}