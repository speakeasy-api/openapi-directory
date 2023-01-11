package openapisdk.models.operations;



public class GetEntitiesResponse {
    public String contentType;
    public GetEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntitiesResponseType getEntitiesResponseType;
    public GetEntitiesResponse withGetEntitiesResponseType(openapisdk.models.shared.GetEntitiesResponseType getEntitiesResponseType) {
        this.getEntitiesResponseType = getEntitiesResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEntitiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}