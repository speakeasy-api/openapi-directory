package openapisdk.models.operations;



public class PoolListResponse {
    public Object batchError;
    public PoolListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudPoolListResult;
    public PoolListResponse withCloudPoolListResult(Object cloudPoolListResult) {
        this.cloudPoolListResult = cloudPoolListResult;
        return this;
    }
    public String contentType;
    public PoolListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}