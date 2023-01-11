package openapisdk.models.operations;



public class ObjectPostTaxationItemResponse {
    public String contentType;
    public ObjectPostTaxationItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostTaxationItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse;
    public ObjectPostTaxationItemResponse withProxyBadRequestResponse(openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse) {
        this.proxyBadRequestResponse = proxyBadRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPostTaxationItemResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostTaxationItemResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostTaxationItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}