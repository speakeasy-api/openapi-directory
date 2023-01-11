package openapisdk.models.operations;



public class GetConnectionsResponse {
    public Object[] connections;
    public GetConnectionsResponse withConnections(Object[] connections) {
        this.connections = connections;
        return this;
    }
    public String contentType;
    public GetConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}