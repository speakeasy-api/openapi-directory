package openapisdk.models.operations;



public class PoolRemoveNodesResponse {
    public Object batchError;
    public PoolRemoveNodesResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolRemoveNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolRemoveNodesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolRemoveNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}