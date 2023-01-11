package openapisdk.models.operations;



public class ObjectGetFeatureResponse {
    public String contentType;
    public ObjectGetFeatureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetFeatureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetFeature;
    public ObjectGetFeatureResponse withProxyGetFeature(java.util.Map<String, Object> proxyGetFeature) {
        this.proxyGetFeature = proxyGetFeature;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetFeatureResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetFeatureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetFeatureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}