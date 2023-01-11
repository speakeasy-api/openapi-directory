package openapisdk.models.operations;



public class PutRenewSubscriptionResponse {
    public String contentType;
    public PutRenewSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRenewSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutRenewSubscriptionResponseType putRenewSubscriptionResponseType;
    public PutRenewSubscriptionResponse withPutRenewSubscriptionResponseType(openapisdk.models.shared.PutRenewSubscriptionResponseType putRenewSubscriptionResponseType) {
        this.putRenewSubscriptionResponseType = putRenewSubscriptionResponseType;
        return this;
    }
    public Long statusCode;
    public PutRenewSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}