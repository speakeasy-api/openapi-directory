package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAllSipNumbersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteAllSipNumbersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}