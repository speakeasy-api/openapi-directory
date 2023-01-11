package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountBillingUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountBillingUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}