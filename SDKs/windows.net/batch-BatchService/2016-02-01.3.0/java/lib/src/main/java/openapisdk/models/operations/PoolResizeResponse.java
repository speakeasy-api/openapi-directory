package openapisdk.models.operations;



public class PoolResizeResponse {
    public Object batchError;
    public PoolResizeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolResizeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}