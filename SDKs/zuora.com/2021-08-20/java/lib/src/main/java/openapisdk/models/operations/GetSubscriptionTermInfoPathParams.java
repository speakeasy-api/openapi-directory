package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionTermInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionNumber")
    public String subscriptionNumber;
    public GetSubscriptionTermInfoPathParams withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}