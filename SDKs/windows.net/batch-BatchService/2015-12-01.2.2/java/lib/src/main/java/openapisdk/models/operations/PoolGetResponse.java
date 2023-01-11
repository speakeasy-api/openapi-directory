package openapisdk.models.operations;



public class PoolGetResponse {
    public Object batchError;
    public PoolGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudPool;
    public PoolGetResponse withCloudPool(Object cloudPool) {
        this.cloudPool = cloudPool;
        return this;
    }
    public String contentType;
    public PoolGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}