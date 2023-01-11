package openapisdk.models.operations;



public class PutCancelPaymentResponse {
    public String contentType;
    public PutCancelPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getarPaymentType;
    public PutCancelPaymentResponse withGetarPaymentType(java.util.Map<String, Object> getarPaymentType) {
        this.getarPaymentType = getarPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCancelPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCancelPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}