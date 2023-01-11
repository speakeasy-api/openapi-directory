package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtensionCtrlGetAccountExtensionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public ExtensionCtrlGetAccountExtensionByIdPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=extension_number")
    public Double extensionNumber;
    public ExtensionCtrlGetAccountExtensionByIdPathParams withExtensionNumber(Double extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
}