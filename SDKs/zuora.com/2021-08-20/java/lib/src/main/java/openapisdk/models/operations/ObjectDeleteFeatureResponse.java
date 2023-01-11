package openapisdk.models.operations;



public class ObjectDeleteFeatureResponse {
    public String contentType;
    public ObjectDeleteFeatureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectDeleteFeatureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse;
    public ObjectDeleteFeatureResponse withProxyDeleteResponse(openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse) {
        this.proxyDeleteResponse = proxyDeleteResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectDeleteFeatureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectDeleteFeatureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}