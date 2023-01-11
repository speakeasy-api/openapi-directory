package openapisdk.models.operations;



public class PostReversePaymentResponse {
    public String contentType;
    public PostReversePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostReversePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostReversePaymentResponse postReversePaymentResponse;
    public PostReversePaymentResponse withPostReversePaymentResponse(openapisdk.models.shared.PostReversePaymentResponse postReversePaymentResponse) {
        this.postReversePaymentResponse = postReversePaymentResponse;
        return this;
    }
    public Long statusCode;
    public PostReversePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}