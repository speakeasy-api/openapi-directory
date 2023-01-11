package openapisdk.models.operations;



public class PostDocumentPropertiesResponse {
    public String contentType;
    public PostDocumentPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType;
    public PostDocumentPropertiesResponse withGetDocumentPropertiesResponseType(openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType) {
        this.getDocumentPropertiesResponseType = getDocumentPropertiesResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDocumentPropertiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDocumentPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}