package openapisdk.models.operations;



public class ObjectPostProductRatePlanResponse {
    public String contentType;
    public ObjectPostProductRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostProductRatePlanResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse;
    public ObjectPostProductRatePlanResponse withProxyBadRequestResponse(openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse) {
        this.proxyBadRequestResponse = proxyBadRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPostProductRatePlanResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostProductRatePlanResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostProductRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}