package openapisdk.models.operations;



public class PoolEnableAutoScaleResponse {
    public Object batchError;
    public PoolEnableAutoScaleResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolEnableAutoScaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolEnableAutoScaleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolEnableAutoScaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}