package openapisdk.models.operations;



public class ActionPosTqueryResponse {
    public String contentType;
    public ActionPosTqueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTqueryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyActionqueryResponse proxyActionqueryResponse;
    public ActionPosTqueryResponse withProxyActionqueryResponse(openapisdk.models.shared.ProxyActionqueryResponse proxyActionqueryResponse) {
        this.proxyActionqueryResponse = proxyActionqueryResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTqueryResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTqueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}