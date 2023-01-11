package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddInternalNumbersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AddInternalNumbersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}