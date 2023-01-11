package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetAccountPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}