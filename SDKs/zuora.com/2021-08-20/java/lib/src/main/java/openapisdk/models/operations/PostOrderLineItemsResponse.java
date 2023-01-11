package openapisdk.models.operations;



public class PostOrderLineItemsResponse {
    public String contentType;
    public PostOrderLineItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderLineItemResponseType getOrderLineItemResponseType;
    public PostOrderLineItemsResponse withGetOrderLineItemResponseType(openapisdk.models.shared.GetOrderLineItemResponseType getOrderLineItemResponseType) {
        this.getOrderLineItemResponseType = getOrderLineItemResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostOrderLineItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostOrderLineItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}