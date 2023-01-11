package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanAddonCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountPlanAddonCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}