package openapisdk.models.operations;



public class ObjectPostUnitOfMeasureResponse {
    public String contentType;
    public ObjectPostUnitOfMeasureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostUnitOfMeasureResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse;
    public ObjectPostUnitOfMeasureResponse withProxyBadRequestResponse(openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse) {
        this.proxyBadRequestResponse = proxyBadRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPostUnitOfMeasureResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostUnitOfMeasureResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostUnitOfMeasureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}