package openapisdk.models.operations;



public class PoolUpgradeOsResponse {
    public Object batchError;
    public PoolUpgradeOsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolUpgradeOsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolUpgradeOsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PoolUpgradeOsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}