package openapisdk.models.operations;



public class GetEntityConnectionsResponse {
    public String contentType;
    public GetEntityConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntityConnectionsResponseType getEntityConnectionsResponseType;
    public GetEntityConnectionsResponse withGetEntityConnectionsResponseType(openapisdk.models.shared.GetEntityConnectionsResponseType getEntityConnectionsResponseType) {
        this.getEntityConnectionsResponseType = getEntityConnectionsResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEntityConnectionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEntityConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}