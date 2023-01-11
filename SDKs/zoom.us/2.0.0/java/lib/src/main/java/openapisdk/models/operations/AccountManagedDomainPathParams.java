package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountManagedDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountManagedDomainPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}