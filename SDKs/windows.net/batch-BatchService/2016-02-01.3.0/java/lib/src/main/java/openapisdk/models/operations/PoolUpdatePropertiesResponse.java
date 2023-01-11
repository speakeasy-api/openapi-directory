package openapisdk.models.operations;



public class PoolUpdatePropertiesResponse {
    public Object batchError;
    public PoolUpdatePropertiesResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolUpdatePropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolUpdatePropertiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolUpdatePropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}