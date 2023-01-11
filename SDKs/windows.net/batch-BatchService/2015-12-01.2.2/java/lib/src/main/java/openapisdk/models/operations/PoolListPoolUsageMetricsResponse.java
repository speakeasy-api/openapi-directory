package openapisdk.models.operations;



public class PoolListPoolUsageMetricsResponse {
    public Object batchError;
    public PoolListPoolUsageMetricsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolListPoolUsageMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolListPoolUsageMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object poolListPoolUsageMetricsResult;
    public PoolListPoolUsageMetricsResponse withPoolListPoolUsageMetricsResult(Object poolListPoolUsageMetricsResult) {
        this.poolListPoolUsageMetricsResult = poolListPoolUsageMetricsResult;
        return this;
    }
    public Long statusCode;
    public PoolListPoolUsageMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}