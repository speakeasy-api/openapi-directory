package openapisdk.models.operations;



public class GetRSbyInvoiceItemAdjustmentResponse {
    public String contentType;
    public GetRSbyInvoiceItemAdjustmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getrsDetailType;
    public GetRSbyInvoiceItemAdjustmentResponse withGetrsDetailType(java.util.Map<String, Object> getrsDetailType) {
        this.getrsDetailType = getrsDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSbyInvoiceItemAdjustmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSbyInvoiceItemAdjustmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}