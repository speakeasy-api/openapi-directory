package openapisdk.models.operations;



public class ActionPosTupdateResponse {
    public String contentType;
    public ActionPosTupdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTupdateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTupdateResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.SaveResult[] saveResults;
    public ActionPosTupdateResponse withSaveResults(openapisdk.models.shared.SaveResult[] saveResults) {
        this.saveResults = saveResults;
        return this;
    }
    public Long statusCode;
    public ActionPosTupdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}