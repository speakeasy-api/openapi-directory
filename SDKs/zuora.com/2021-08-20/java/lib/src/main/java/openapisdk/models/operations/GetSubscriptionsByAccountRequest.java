package openapisdk.models.operations;



public class GetSubscriptionsByAccountRequest {
    public GetSubscriptionsByAccountPathParams pathParams;
    public GetSubscriptionsByAccountRequest withPathParams(GetSubscriptionsByAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubscriptionsByAccountQueryParams queryParams;
    public GetSubscriptionsByAccountRequest withQueryParams(GetSubscriptionsByAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSubscriptionsByAccountHeaders headers;
    public GetSubscriptionsByAccountRequest withHeaders(GetSubscriptionsByAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
}