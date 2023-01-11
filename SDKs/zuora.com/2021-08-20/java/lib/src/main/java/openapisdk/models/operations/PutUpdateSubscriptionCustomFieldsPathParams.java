package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateSubscriptionCustomFieldsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionNumber")
    public String subscriptionNumber;
    public PutUpdateSubscriptionCustomFieldsPathParams withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}