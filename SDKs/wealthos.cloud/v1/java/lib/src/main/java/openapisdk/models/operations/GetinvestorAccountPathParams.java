package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetinvestorAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public GetinvestorAccountPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}