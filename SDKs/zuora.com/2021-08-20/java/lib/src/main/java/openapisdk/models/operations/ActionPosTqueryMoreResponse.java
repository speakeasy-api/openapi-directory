package openapisdk.models.operations;



public class ActionPosTqueryMoreResponse {
    public String contentType;
    public ActionPosTqueryMoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTqueryMoreResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyActionqueryMoreResponse proxyActionqueryMoreResponse;
    public ActionPosTqueryMoreResponse withProxyActionqueryMoreResponse(openapisdk.models.shared.ProxyActionqueryMoreResponse proxyActionqueryMoreResponse) {
        this.proxyActionqueryMoreResponse = proxyActionqueryMoreResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTqueryMoreResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTqueryMoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}