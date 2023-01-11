package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanBaseDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountPlanBaseDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}