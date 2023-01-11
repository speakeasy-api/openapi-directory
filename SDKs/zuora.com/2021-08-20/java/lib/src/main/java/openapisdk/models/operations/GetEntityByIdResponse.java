package openapisdk.models.operations;



public class GetEntityByIdResponse {
    public String contentType;
    public GetEntityByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntitiesResponseTypeWithId getEntitiesResponseTypeWithId;
    public GetEntityByIdResponse withGetEntitiesResponseTypeWithId(openapisdk.models.shared.GetEntitiesResponseTypeWithId getEntitiesResponseTypeWithId) {
        this.getEntitiesResponseTypeWithId = getEntitiesResponseTypeWithId;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEntityByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEntityByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}