package openapisdk.models.operations;



public class GetDocumentProperiesResponse {
    public String contentType;
    public GetDocumentProperiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType;
    public GetDocumentProperiesResponse withGetDocumentPropertiesResponseType(openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType) {
        this.getDocumentPropertiesResponseType = getDocumentPropertiesResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDocumentProperiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDocumentProperiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}