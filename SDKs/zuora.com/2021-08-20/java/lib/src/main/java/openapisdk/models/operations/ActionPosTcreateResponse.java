package openapisdk.models.operations;



public class ActionPosTcreateResponse {
    public String contentType;
    public ActionPosTcreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTcreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTcreateResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.SaveResult[] saveResults;
    public ActionPosTcreateResponse withSaveResults(openapisdk.models.shared.SaveResult[] saveResults) {
        this.saveResults = saveResults;
        return this;
    }
    public Long statusCode;
    public ActionPosTcreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}