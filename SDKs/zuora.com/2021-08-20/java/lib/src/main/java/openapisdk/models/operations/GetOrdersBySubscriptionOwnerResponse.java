package openapisdk.models.operations;



public class GetOrdersBySubscriptionOwnerResponse {
    public String contentType;
    public GetOrdersBySubscriptionOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrdersResponse getOrdersResponse;
    public GetOrdersBySubscriptionOwnerResponse withGetOrdersResponse(openapisdk.models.shared.GetOrdersResponse getOrdersResponse) {
        this.getOrdersResponse = getOrdersResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrdersBySubscriptionOwnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrdersBySubscriptionOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}