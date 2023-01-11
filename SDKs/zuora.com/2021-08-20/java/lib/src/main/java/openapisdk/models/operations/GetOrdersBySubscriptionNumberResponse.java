package openapisdk.models.operations;



public class GetOrdersBySubscriptionNumberResponse {
    public String contentType;
    public GetOrdersBySubscriptionNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrdersResponse getOrdersResponse;
    public GetOrdersBySubscriptionNumberResponse withGetOrdersResponse(openapisdk.models.shared.GetOrdersResponse getOrdersResponse) {
        this.getOrdersResponse = getOrdersResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrdersBySubscriptionNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrdersBySubscriptionNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}