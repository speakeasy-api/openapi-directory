package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountTrustedDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountTrustedDomainPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}