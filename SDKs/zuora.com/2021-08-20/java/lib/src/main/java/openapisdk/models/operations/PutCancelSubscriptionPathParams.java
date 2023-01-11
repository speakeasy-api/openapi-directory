package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCancelSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-key")
    public String subscriptionKey;
    public PutCancelSubscriptionPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}