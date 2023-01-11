package openapisdk.models.operations;



public class ObjectPostCreditBalanceAdjustmentResponse {
    public String contentType;
    public ObjectPostCreditBalanceAdjustmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostCreditBalanceAdjustmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse;
    public ObjectPostCreditBalanceAdjustmentResponse withProxyBadRequestResponse(openapisdk.models.shared.ProxyBadRequestResponse proxyBadRequestResponse) {
        this.proxyBadRequestResponse = proxyBadRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse;
    public ObjectPostCreditBalanceAdjustmentResponse withProxyCreateOrModifyResponse(openapisdk.models.shared.ProxyCreateOrModifyResponse proxyCreateOrModifyResponse) {
        this.proxyCreateOrModifyResponse = proxyCreateOrModifyResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostCreditBalanceAdjustmentResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostCreditBalanceAdjustmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}