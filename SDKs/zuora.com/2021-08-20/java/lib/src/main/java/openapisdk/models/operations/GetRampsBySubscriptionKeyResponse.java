package openapisdk.models.operations;



public class GetRampsBySubscriptionKeyResponse {
    public String contentType;
    public GetRampsBySubscriptionKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRampsBySubscriptionKeyResponseType getRampsBySubscriptionKeyResponseType;
    public GetRampsBySubscriptionKeyResponse withGetRampsBySubscriptionKeyResponseType(openapisdk.models.shared.GetRampsBySubscriptionKeyResponseType getRampsBySubscriptionKeyResponseType) {
        this.getRampsBySubscriptionKeyResponseType = getRampsBySubscriptionKeyResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRampsBySubscriptionKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRampsBySubscriptionKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}