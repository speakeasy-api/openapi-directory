package openapisdk.models.operations;



public class ObjectDeleteUnitOfMeasureResponse {
    public String contentType;
    public ObjectDeleteUnitOfMeasureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectDeleteUnitOfMeasureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse;
    public ObjectDeleteUnitOfMeasureResponse withProxyDeleteResponse(openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse) {
        this.proxyDeleteResponse = proxyDeleteResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectDeleteUnitOfMeasureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectDeleteUnitOfMeasureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}