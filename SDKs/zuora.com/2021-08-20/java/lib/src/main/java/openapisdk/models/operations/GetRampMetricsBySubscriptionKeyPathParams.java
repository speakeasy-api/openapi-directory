package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRampMetricsBySubscriptionKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionKey")
    public String subscriptionKey;
    public GetRampMetricsBySubscriptionKeyPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}