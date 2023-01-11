package openapisdk.models.operations;



public class ActionPosTdeleteResponse {
    public String contentType;
    public ActionPosTdeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResult[] deleteResults;
    public ActionPosTdeleteResponse withDeleteResults(openapisdk.models.shared.DeleteResult[] deleteResults) {
        this.deleteResults = deleteResults;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTdeleteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTdeleteResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTdeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}