package openapisdk.models.operations;



public class GetSubscriptionTermInfoRequest {
    public GetSubscriptionTermInfoPathParams pathParams;
    public GetSubscriptionTermInfoRequest withPathParams(GetSubscriptionTermInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubscriptionTermInfoQueryParams queryParams;
    public GetSubscriptionTermInfoRequest withQueryParams(GetSubscriptionTermInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSubscriptionTermInfoHeaders headers;
    public GetSubscriptionTermInfoRequest withHeaders(GetSubscriptionTermInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
}