package openapisdk.models.operations;



public class PoolGetAllPoolsLifetimeStatisticsResponse {
    public Object batchError;
    public PoolGetAllPoolsLifetimeStatisticsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public PoolGetAllPoolsLifetimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PoolGetAllPoolsLifetimeStatisticsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object poolStatistics;
    public PoolGetAllPoolsLifetimeStatisticsResponse withPoolStatistics(Object poolStatistics) {
        this.poolStatistics = poolStatistics;
        return this;
    }
    public Long statusCode;
    public PoolGetAllPoolsLifetimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}