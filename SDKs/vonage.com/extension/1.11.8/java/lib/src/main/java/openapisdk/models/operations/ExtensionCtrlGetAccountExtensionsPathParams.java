package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtensionCtrlGetAccountExtensionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public ExtensionCtrlGetAccountExtensionsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}