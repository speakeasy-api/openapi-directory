package openapisdk.models.operations;



public class ObjectPostImportResponse {
    public String contentType;
    public ObjectPostImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ObjectPostImportResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProxyPostImport proxyPostImport;
    public ObjectPostImportResponse withProxyPostImport(openapisdk.models.shared.ProxyPostImport proxyPostImport) {
        this.proxyPostImport = proxyPostImport;
        return this;
    }
    public openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse;
    public ObjectPostImportResponse withProxyUnauthorizedResponse(openapisdk.models.shared.ProxyUnauthorizedResponse proxyUnauthorizedResponse) {
        this.proxyUnauthorizedResponse = proxyUnauthorizedResponse;
        return this;
    }
    public Long statusCode;
    public ObjectPostImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}