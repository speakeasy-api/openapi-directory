package openapisdk.models.operations;



public class GetInvoiceItemsResponse {
    public String contentType;
    public GetInvoiceItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvoiceItemsResponse getInvoiceItemsResponse;
    public GetInvoiceItemsResponse withGetInvoiceItemsResponse(openapisdk.models.shared.GetInvoiceItemsResponse getInvoiceItemsResponse) {
        this.getInvoiceItemsResponse = getInvoiceItemsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoiceItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoiceItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}