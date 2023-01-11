package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRampsBySubscriptionKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionKey")
    public String subscriptionKey;
    public GetRampsBySubscriptionKeyPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}