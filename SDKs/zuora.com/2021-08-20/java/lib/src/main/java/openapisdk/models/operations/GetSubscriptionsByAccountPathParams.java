package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionsByAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetSubscriptionsByAccountPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}