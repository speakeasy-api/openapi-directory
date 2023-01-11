package openapisdk.models.operations;



public class PoolStopResizeResponse {
    public Object batchError;
    public PoolStopResizeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolStopResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolStopResizeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolStopResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}