package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersBySubscriptionNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionNumber")
    public String subscriptionNumber;
    public GetOrdersBySubscriptionNumberPathParams withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}