package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAmendmentsBySubscriptionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-id")
    public String subscriptionId;
    public GetAmendmentsBySubscriptionIdPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}