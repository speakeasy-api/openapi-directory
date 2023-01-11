package openapisdk.models.operations;



public class PutCancelSubscriptionResponse {
    public String contentType;
    public PutCancelSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCancelSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostSubscriptionCancellationResponseType postSubscriptionCancellationResponseType;
    public PutCancelSubscriptionResponse withPostSubscriptionCancellationResponseType(openapisdk.models.shared.PostSubscriptionCancellationResponseType postSubscriptionCancellationResponseType) {
        this.postSubscriptionCancellationResponseType = postSubscriptionCancellationResponseType;
        return this;
    }
    public Long statusCode;
    public PutCancelSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}