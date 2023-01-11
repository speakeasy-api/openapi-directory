package openapisdk.models.operations;



public class ObjectGetUnitOfMeasureResponse {
    public String contentType;
    public ObjectGetUnitOfMeasureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectGetUnitOfMeasureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyGetUnitOfMeasure proxyGetUnitOfMeasure;
    public ObjectGetUnitOfMeasureResponse withProxyGetUnitOfMeasure(openapisdk.models.shared.ProxyGetUnitOfMeasure proxyGetUnitOfMeasure) {
        this.proxyGetUnitOfMeasure = proxyGetUnitOfMeasure;
        return this;
    }
    public openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse;
    public ObjectGetUnitOfMeasureResponse withProxyNoDataResponse(openapisdk.models.shared.ProxyNoDataResponse proxyNoDataResponse) {
        this.proxyNoDataResponse = proxyNoDataResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectGetUnitOfMeasureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectGetUnitOfMeasureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}