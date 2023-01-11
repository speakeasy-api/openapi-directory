package openapisdk.models.operations;



public class GetOrderLineItemRequest {
    public GetOrderLineItemPathParams pathParams;
    public GetOrderLineItemRequest withPathParams(GetOrderLineItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderLineItemHeaders headers;
    public GetOrderLineItemRequest withHeaders(GetOrderLineItemHeaders headers) {
        this.headers = headers;
        return this;
    }
}