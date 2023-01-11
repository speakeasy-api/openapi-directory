package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public DeleteAccountPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}