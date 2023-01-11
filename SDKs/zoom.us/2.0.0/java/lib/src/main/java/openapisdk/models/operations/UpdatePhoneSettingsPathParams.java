package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public UpdatePhoneSettingsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}