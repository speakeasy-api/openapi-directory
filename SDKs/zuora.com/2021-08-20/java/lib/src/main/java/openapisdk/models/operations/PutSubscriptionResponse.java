package openapisdk.models.operations;



public class PutSubscriptionResponse {
    public String contentType;
    public PutSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutSubscriptionResponseType putSubscriptionResponseType;
    public PutSubscriptionResponse withPutSubscriptionResponseType(openapisdk.models.shared.PutSubscriptionResponseType putSubscriptionResponseType) {
        this.putSubscriptionResponseType = putSubscriptionResponseType;
        return this;
    }
    public Long statusCode;
    public PutSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}