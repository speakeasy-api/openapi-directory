package openapisdk.models.operations;



public class ObjectPostBillRunResponse {
    public String contentType;
    public ObjectPostBillRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostBillRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse;
    public ObjectPostBillRunResponse withProxyBadRequestResponse(openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse) {
        this.proxyBadRequestResponse = proxyBadRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPostBillRunResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostBillRunResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostBillRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}