package openapisdk.models.operations;



public class GetRSbyInvoiceItemResponse {
    public String contentType;
    public GetRSbyInvoiceItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getrsDetailType;
    public GetRSbyInvoiceItemResponse withGetrsDetailType(java.util.Map<String, Object> getrsDetailType) {
        this.getrsDetailType = getrsDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSbyInvoiceItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSbyInvoiceItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}