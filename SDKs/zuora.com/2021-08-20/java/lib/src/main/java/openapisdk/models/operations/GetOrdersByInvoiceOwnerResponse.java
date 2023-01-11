package openapisdk.models.operations;



public class GetOrdersByInvoiceOwnerResponse {
    public String contentType;
    public GetOrdersByInvoiceOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrdersResponse getOrdersResponse;
    public GetOrdersByInvoiceOwnerResponse withGetOrdersResponse(openapisdk.models.shared.GetOrdersResponse getOrdersResponse) {
        this.getOrdersResponse = getOrdersResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrdersByInvoiceOwnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrdersByInvoiceOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}