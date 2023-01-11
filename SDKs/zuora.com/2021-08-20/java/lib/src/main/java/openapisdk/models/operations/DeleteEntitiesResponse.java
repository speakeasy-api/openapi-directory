package openapisdk.models.operations;



public class DeleteEntitiesResponse {
    public String contentType;
    public DeleteEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletEntityResponseType deletEntityResponseType;
    public DeleteEntitiesResponse withDeletEntityResponseType(openapisdk.models.shared.DeletEntityResponseType deletEntityResponseType) {
        this.deletEntityResponseType = deletEntityResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteEntitiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}