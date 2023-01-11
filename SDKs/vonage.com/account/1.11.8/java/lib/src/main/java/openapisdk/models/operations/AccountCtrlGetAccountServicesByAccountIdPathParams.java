package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCtrlGetAccountServicesByAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Double accountId;
    public AccountCtrlGetAccountServicesByAccountIdPathParams withAccountId(Double accountId) {
        this.accountId = accountId;
        return this;
    }
}