package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountLockSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public UpdateAccountLockSettingsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}