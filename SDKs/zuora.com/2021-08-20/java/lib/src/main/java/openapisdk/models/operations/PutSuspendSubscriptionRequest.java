package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSuspendSubscriptionRequest {
    public PutSuspendSubscriptionPathParams pathParams;
    public PutSuspendSubscriptionRequest withPathParams(PutSuspendSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutSuspendSubscriptionHeaders headers;
    public PutSuspendSubscriptionRequest withHeaders(PutSuspendSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSubscriptionSuspendType request;
    public PutSuspendSubscriptionRequest withRequest(openapisdk.models.shared.PutSubscriptionSuspendType request) {
        this.request = request;
        return this;
    }
}