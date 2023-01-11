package openapisdk.models.operations;



public class PoolDeleteResponse {
    public Object batchError;
    public PoolDeleteResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolDeleteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}