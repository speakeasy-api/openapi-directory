package openapisdk.models.operations;



public class PostCreatePaymentResponse {
    public String contentType;
    public PostCreatePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getarPaymentType;
    public PostCreatePaymentResponse withGetarPaymentType(java.util.Map<String, Object> getarPaymentType) {
        this.getarPaymentType = getarPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreatePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCreatePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}