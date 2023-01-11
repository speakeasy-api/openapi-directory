package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountOptionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountOptionsUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}