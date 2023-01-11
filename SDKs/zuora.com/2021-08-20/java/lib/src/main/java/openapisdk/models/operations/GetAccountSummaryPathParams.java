package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetAccountSummaryPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}