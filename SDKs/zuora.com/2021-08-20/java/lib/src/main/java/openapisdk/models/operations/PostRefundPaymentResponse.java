package openapisdk.models.operations;



public class PostRefundPaymentResponse {
    public String contentType;
    public PostRefundPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRefundPaymentType;
    public PostRefundPaymentResponse withGetRefundPaymentType(java.util.Map<String, Object> getRefundPaymentType) {
        this.getRefundPaymentType = getRefundPaymentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRefundPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRefundPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}