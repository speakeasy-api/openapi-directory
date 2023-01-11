package openapisdk.models.operations;



public class GetOrdersBySubscriptionNumberRequest {
    public GetOrdersBySubscriptionNumberPathParams pathParams;
    public GetOrdersBySubscriptionNumberRequest withPathParams(GetOrdersBySubscriptionNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrdersBySubscriptionNumberQueryParams queryParams;
    public GetOrdersBySubscriptionNumberRequest withQueryParams(GetOrdersBySubscriptionNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrdersBySubscriptionNumberHeaders headers;
    public GetOrdersBySubscriptionNumberRequest withHeaders(GetOrdersBySubscriptionNumberHeaders headers) {
        this.headers = headers;
        return this;
    }
}