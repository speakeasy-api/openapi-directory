package openapisdk.models.operations;



public class PoolExistsResponse {
    public Object batchError;
    public PoolExistsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolExistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolExistsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolExistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}