package openapisdk.models.operations;



public class GetCatalogResponse {
    public String contentType;
    public GetCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCatalogType getCatalogType;
    public GetCatalogResponse withGetCatalogType(openapisdk.models.shared.GetCatalogType getCatalogType) {
        this.getCatalogType = getCatalogType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCatalogResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}