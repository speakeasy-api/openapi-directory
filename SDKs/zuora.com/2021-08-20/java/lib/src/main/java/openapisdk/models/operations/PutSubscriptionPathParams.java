package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-key")
    public String subscriptionKey;
    public PutSubscriptionPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}