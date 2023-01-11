package openapisdk.models.operations;



public class PoolAddResponse {
    public Object batchError;
    public PoolAddResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}