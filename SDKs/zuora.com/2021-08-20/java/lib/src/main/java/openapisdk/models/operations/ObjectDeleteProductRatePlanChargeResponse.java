package openapisdk.models.operations;



public class ObjectDeleteProductRatePlanChargeResponse {
    public String contentType;
    public ObjectDeleteProductRatePlanChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectDeleteProductRatePlanChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse;
    public ObjectDeleteProductRatePlanChargeResponse withProxyDeleteResponse(openapisdk.models.shared.ProxyDeleteResponse proxyDeleteResponse) {
        this.proxyDeleteResponse = proxyDeleteResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectDeleteProductRatePlanChargeResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectDeleteProductRatePlanChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}