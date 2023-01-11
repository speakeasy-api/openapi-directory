package openapisdk.models.operations;



public class ActionPosTgenerateResponse {
    public String contentType;
    public ActionPosTgenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTgenerateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTgenerateResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.SaveResult[] saveResults;
    public ActionPosTgenerateResponse withSaveResults(openapisdk.models.shared.SaveResult[] saveResults) {
        this.saveResults = saveResults;
        return this;
    }
    public Long statusCode;
    public ActionPosTgenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}