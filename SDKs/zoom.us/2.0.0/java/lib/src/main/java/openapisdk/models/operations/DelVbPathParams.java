package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelVbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DelVbPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}