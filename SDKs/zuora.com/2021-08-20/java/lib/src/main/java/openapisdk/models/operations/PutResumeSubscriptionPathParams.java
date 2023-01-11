package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResumeSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription-key")
    public String subscriptionKey;
    public PutResumeSubscriptionPathParams withSubscriptionKey(String subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
        return this;
    }
}