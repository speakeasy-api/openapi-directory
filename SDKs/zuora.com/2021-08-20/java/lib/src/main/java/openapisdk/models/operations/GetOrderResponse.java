package openapisdk.models.operations;



public class GetOrderResponse {
    public String contentType;
    public GetOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderResponse getOrderResponse;
    public GetOrderResponse withGetOrderResponse(openapisdk.models.shared.GetOrderResponse getOrderResponse) {
        this.getOrderResponse = getOrderResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrderResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}