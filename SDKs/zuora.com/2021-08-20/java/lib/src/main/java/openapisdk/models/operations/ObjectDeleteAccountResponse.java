package openapisdk.models.operations;



public class ObjectDeleteAccountResponse {
    public String contentType;
    public ObjectDeleteAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectDeleteAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse;
    public ObjectDeleteAccountResponse withProxyDeleteResponse(openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse) {
        this.proxyDeleteResponse = proxyDeleteResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectDeleteAccountResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectDeleteAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}