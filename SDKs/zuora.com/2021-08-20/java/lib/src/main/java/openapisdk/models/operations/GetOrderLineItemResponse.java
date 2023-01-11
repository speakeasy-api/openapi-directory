package openapisdk.models.operations;



public class GetOrderLineItemResponse {
    public String contentType;
    public GetOrderLineItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderLineItemResponseType getOrderLineItemResponseType;
    public GetOrderLineItemResponse withGetOrderLineItemResponseType(openapisdk.models.shared.GetOrderLineItemResponseType getOrderLineItemResponseType) {
        this.getOrderLineItemResponseType = getOrderLineItemResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrderLineItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrderLineItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}