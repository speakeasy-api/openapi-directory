package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountLockSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountLockSettingsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}