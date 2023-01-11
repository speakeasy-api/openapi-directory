package openapisdk.models.operations;



public class GetSubscriptionsByKeyRequest {
    public GetSubscriptionsByKeyPathParams pathParams;
    public GetSubscriptionsByKeyRequest withPathParams(GetSubscriptionsByKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubscriptionsByKeyQueryParams queryParams;
    public GetSubscriptionsByKeyRequest withQueryParams(GetSubscriptionsByKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSubscriptionsByKeyHeaders headers;
    public GetSubscriptionsByKeyRequest withHeaders(GetSubscriptionsByKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}