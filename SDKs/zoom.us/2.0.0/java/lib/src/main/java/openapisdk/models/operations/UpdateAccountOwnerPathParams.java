package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public UpdateAccountOwnerPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}