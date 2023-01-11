package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCancelSubscriptionRequest {
    public PutCancelSubscriptionPathParams pathParams;
    public PutCancelSubscriptionRequest withPathParams(PutCancelSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCancelSubscriptionHeaders headers;
    public PutCancelSubscriptionRequest withHeaders(PutCancelSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostSubscriptionCancellationType request;
    public PutCancelSubscriptionRequest withRequest(openapisdk.models.shared.PostSubscriptionCancellationType request) {
        this.request = request;
        return this;
    }
}