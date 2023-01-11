package openapisdk.models.operations;



public class PostSettlePaymentResponse {
    public String contentType;
    public PostSettlePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSettlePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostSettlePaymentResponse postSettlePaymentResponse;
    public PostSettlePaymentResponse withPostSettlePaymentResponse(openapisdk.models.shared.PostSettlePaymentResponse postSettlePaymentResponse) {
        this.postSettlePaymentResponse = postSettlePaymentResponse;
        return this;
    }
    public Long statusCode;
    public PostSettlePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}