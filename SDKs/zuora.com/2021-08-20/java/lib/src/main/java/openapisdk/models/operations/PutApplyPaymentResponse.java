package openapisdk.models.operations;



public class PutApplyPaymentResponse {
    public String contentType;
    public PutApplyPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getarPaymentType;
    public PutApplyPaymentResponse withGetarPaymentType(java.util.Map<String, Object> getarPaymentType) {
        this.getarPaymentType = getarPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutApplyPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutApplyPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}