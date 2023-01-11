package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetUsagePathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}