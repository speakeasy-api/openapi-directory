package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public UpdateAccountPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}