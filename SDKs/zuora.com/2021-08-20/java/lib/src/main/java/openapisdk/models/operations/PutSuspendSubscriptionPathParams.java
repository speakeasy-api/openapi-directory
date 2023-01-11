package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSuspendSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-key")
    public String subscriptionKey;
    public PutSuspendSubscriptionPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}