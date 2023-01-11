package openapisdk.models.operations;



public class ObjectPutSubscriptionResponse {
    public String contentType;
    public ObjectPutSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPutSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPutSubscriptionResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPutSubscriptionResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPutSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}