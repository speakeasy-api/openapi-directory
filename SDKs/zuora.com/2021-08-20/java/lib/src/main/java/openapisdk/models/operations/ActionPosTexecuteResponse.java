package openapisdk.models.operations;



public class ActionPosTexecuteResponse {
    public String contentType;
    public ActionPosTexecuteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteResult[] executeResults;
    public ActionPosTexecuteResponse withExecuteResults(openapisdk.models.shared.ExecuteResult[] executeResults) {
        this.executeResults = executeResults;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTexecuteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTexecuteResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTexecuteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}