package openapisdk.models.operations;



public class PutEntityConnectionsAcceptResponse {
    public String contentType;
    public PutEntityConnectionsAcceptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutEntityConnectionsAcceptResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutEntityConnectionsAcceptResponseType putEntityConnectionsAcceptResponseType;
    public PutEntityConnectionsAcceptResponse withPutEntityConnectionsAcceptResponseType(openapisdk.models.shared.PutEntityConnectionsAcceptResponseType putEntityConnectionsAcceptResponseType) {
        this.putEntityConnectionsAcceptResponseType = putEntityConnectionsAcceptResponseType;
        return this;
    }
    public Long statusCode;
    public PutEntityConnectionsAcceptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}