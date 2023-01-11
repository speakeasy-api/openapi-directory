package openapisdk.models.operations;



public class ActionPosTamendResponse {
    public String contentType;
    public ActionPosTamendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionPosTamendResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyActionamendResponse proxyActionamendResponse;
    public ActionPosTamendResponse withProxyActionamendResponse(openapisdk.models.shared.ProxyActionamendResponse proxyActionamendResponse) {
        this.proxyActionamendResponse = proxyActionamendResponse;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ActionPosTamendResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ActionPosTamendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}