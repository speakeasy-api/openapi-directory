package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInternalNumbersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListInternalNumbersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}