package openapisdk.models.operations;



public class PutUpdatePaymentResponse {
    public String contentType;
    public PutUpdatePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getarPaymentType;
    public PutUpdatePaymentResponse withGetarPaymentType(java.util.Map<String, Object> getarPaymentType) {
        this.getarPaymentType = getarPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdatePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdatePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}