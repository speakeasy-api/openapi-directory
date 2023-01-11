package openapisdk.models.operations;



public class GetSubscriptionsByKeyAndVersionRequest {
    public GetSubscriptionsByKeyAndVersionPathParams pathParams;
    public GetSubscriptionsByKeyAndVersionRequest withPathParams(GetSubscriptionsByKeyAndVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubscriptionsByKeyAndVersionQueryParams queryParams;
    public GetSubscriptionsByKeyAndVersionRequest withQueryParams(GetSubscriptionsByKeyAndVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSubscriptionsByKeyAndVersionHeaders headers;
    public GetSubscriptionsByKeyAndVersionRequest withHeaders(GetSubscriptionsByKeyAndVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}