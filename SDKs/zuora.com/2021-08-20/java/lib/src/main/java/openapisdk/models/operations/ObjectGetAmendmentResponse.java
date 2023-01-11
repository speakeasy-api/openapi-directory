package openapisdk.models.operations;



public class ObjectGetAmendmentResponse {
    public String contentType;
    public ObjectGetAmendmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetAmendmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> proxyGetAmendment;
    public ObjectGetAmendmentResponse withProxyGetAmendment(java.util.Map<String, Object> proxyGetAmendment) {
        this.proxyGetAmendment = proxyGetAmendment;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetAmendmentResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetAmendmentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetAmendmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}