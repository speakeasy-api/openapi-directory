package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutSubscriptionRequest {
    public ObjectPutSubscriptionPathParams pathParams;
    public ObjectPutSubscriptionRequest withPathParams(ObjectPutSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutSubscriptionQueryParams queryParams;
    public ObjectPutSubscriptionRequest withQueryParams(ObjectPutSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutSubscriptionHeaders headers;
    public ObjectPutSubscriptionRequest withHeaders(ObjectPutSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}