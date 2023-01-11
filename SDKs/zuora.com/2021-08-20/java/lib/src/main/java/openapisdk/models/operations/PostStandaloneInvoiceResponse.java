package openapisdk.models.operations;



public class PostStandaloneInvoiceResponse {
    public String contentType;
    public PostStandaloneInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostStandaloneInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> postInvoiceResponse;
    public PostStandaloneInvoiceResponse withPostInvoiceResponse(java.util.Map<String, Object> postInvoiceResponse) {
        this.postInvoiceResponse = postInvoiceResponse;
        return this;
    }
    public Long statusCode;
    public PostStandaloneInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}