package openapisdk.models.operations;



public class GetOrdersBySubscriptionOwnerRequest {
    public GetOrdersBySubscriptionOwnerPathParams pathParams;
    public GetOrdersBySubscriptionOwnerRequest withPathParams(GetOrdersBySubscriptionOwnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrdersBySubscriptionOwnerQueryParams queryParams;
    public GetOrdersBySubscriptionOwnerRequest withQueryParams(GetOrdersBySubscriptionOwnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrdersBySubscriptionOwnerHeaders headers;
    public GetOrdersBySubscriptionOwnerRequest withHeaders(GetOrdersBySubscriptionOwnerHeaders headers) {
        this.headers = headers;
        return this;
    }
}