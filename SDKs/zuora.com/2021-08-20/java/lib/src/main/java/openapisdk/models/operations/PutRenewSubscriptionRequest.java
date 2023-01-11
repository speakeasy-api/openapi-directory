package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRenewSubscriptionRequest {
    public PutRenewSubscriptionPathParams pathParams;
    public PutRenewSubscriptionRequest withPathParams(PutRenewSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRenewSubscriptionHeaders headers;
    public PutRenewSubscriptionRequest withHeaders(PutRenewSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRenewSubscriptionType request;
    public PutRenewSubscriptionRequest withRequest(openapisdk.models.shared.PutRenewSubscriptionType request) {
        this.request = request;
        return this;
    }
}