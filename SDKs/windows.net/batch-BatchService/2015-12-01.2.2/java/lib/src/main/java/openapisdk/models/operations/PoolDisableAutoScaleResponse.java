package openapisdk.models.operations;



public class PoolDisableAutoScaleResponse {
    public Object batchError;
    public PoolDisableAutoScaleResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolDisableAutoScaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolDisableAutoScaleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolDisableAutoScaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}