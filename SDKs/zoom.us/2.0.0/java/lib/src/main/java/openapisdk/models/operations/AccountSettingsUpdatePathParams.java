package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AccountSettingsUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}