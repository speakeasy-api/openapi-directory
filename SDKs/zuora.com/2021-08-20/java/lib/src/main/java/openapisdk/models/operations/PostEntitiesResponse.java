package openapisdk.models.operations;



public class PostEntitiesResponse {
    public String contentType;
    public PostEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEntityResponseType createEntityResponseType;
    public PostEntitiesResponse withCreateEntityResponseType(openapisdk.models.shared.CreateEntityResponseType createEntityResponseType) {
        this.createEntityResponseType = createEntityResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostEntitiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}