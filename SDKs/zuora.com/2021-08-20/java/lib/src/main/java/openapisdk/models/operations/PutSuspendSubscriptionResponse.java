package openapisdk.models.operations;



public class PutSuspendSubscriptionResponse {
    public String contentType;
    public PutSuspendSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutSuspendSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutSubscriptionSuspendResponseType putSubscriptionSuspendResponseType;
    public PutSuspendSubscriptionResponse withPutSubscriptionSuspendResponseType(openapisdk.models.shared.PutSubscriptionSuspendResponseType putSubscriptionSuspendResponseType) {
        this.putSubscriptionSuspendResponseType = putSubscriptionSuspendResponseType;
        return this;
    }
    public Long statusCode;
    public PutSuspendSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}