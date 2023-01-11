package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSubscriptionRequest {
    public PutSubscriptionPathParams pathParams;
    public PutSubscriptionRequest withPathParams(PutSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutSubscriptionHeaders headers;
    public PutSubscriptionRequest withHeaders(PutSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}