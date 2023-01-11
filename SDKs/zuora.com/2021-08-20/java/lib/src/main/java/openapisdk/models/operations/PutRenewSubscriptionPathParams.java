package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRenewSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-key")
    public String subscriptionKey;
    public PutRenewSubscriptionPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}