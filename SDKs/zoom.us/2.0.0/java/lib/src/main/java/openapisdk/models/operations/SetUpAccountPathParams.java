package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUpAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public SetUpAccountPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}