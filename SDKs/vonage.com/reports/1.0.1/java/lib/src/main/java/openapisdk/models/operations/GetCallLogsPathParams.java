package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public GetCallLogsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}