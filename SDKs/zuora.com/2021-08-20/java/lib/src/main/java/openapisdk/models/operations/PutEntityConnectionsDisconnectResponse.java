package openapisdk.models.operations;



public class PutEntityConnectionsDisconnectResponse {
    public String contentType;
    public PutEntityConnectionsDisconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutEntityConnectionsDisconnectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutEntityConnectionsDisconnectResponseType putEntityConnectionsDisconnectResponseType;
    public PutEntityConnectionsDisconnectResponse withPutEntityConnectionsDisconnectResponseType(openapisdk.models.shared.PutEntityConnectionsDisconnectResponseType putEntityConnectionsDisconnectResponseType) {
        this.putEntityConnectionsDisconnectResponseType = putEntityConnectionsDisconnectResponseType;
        return this;
    }
    public Long statusCode;
    public PutEntityConnectionsDisconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}