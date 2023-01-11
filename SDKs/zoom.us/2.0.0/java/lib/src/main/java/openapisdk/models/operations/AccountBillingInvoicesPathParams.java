package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountBillingInvoicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountBillingInvoicesPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}