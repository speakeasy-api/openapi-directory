package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCtrlGetLocationsByAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Double accountId;
    public AccountCtrlGetLocationsByAccountIdPathParams withAccountId(Double accountId) {
        this.accountId = accountId;
        return this;
    }
}