package openapisdk.models.operations;



public class ActionPosTsubscribeResponse {
    public String contentType;
    public ActionPosTsubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTsubscribeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTsubscribeResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTsubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscribeResult[] subscribeResults;
    public ActionPosTsubscribeResponse withSubscribeResults(openapisdk.models.shared.SubscribeResult[] subscribeResults) {
        this.subscribeResults = subscribeResults;
        return this;
    }
}