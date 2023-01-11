package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public GetAccountPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}