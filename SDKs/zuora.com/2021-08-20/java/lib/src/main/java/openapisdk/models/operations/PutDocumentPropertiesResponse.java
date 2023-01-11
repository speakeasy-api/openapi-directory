package openapisdk.models.operations;



public class PutDocumentPropertiesResponse {
    public String contentType;
    public PutDocumentPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType;
    public PutDocumentPropertiesResponse withGetDocumentPropertiesResponseType(openapisdk.models.shared.GetDocumentPropertiesResponseType getDocumentPropertiesResponseType) {
        this.getDocumentPropertiesResponseType = getDocumentPropertiesResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutDocumentPropertiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutDocumentPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}