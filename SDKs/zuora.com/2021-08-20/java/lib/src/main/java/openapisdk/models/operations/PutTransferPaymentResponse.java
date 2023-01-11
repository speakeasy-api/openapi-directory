package openapisdk.models.operations;



public class PutTransferPaymentResponse {
    public String contentType;
    public PutTransferPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getarPaymentType;
    public PutTransferPaymentResponse withGetarPaymentType(java.util.Map<String, Object> getarPaymentType) {
        this.getarPaymentType = getarPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutTransferPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutTransferPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}