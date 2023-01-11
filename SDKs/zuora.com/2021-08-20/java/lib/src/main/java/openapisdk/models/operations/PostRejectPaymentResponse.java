package openapisdk.models.operations;



public class PostRejectPaymentResponse {
    public String contentType;
    public PostRejectPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRejectPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRejectPaymentResponse postRejectPaymentResponse;
    public PostRejectPaymentResponse withPostRejectPaymentResponse(openapisdk.models.shared.PostRejectPaymentResponse postRejectPaymentResponse) {
        this.postRejectPaymentResponse = postRejectPaymentResponse;
        return this;
    }
    public Long statusCode;
    public PostRejectPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}