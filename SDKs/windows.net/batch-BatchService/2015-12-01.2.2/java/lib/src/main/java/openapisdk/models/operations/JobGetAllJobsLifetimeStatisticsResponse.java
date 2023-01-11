package openapisdk.models.operations;



public class JobGetAllJobsLifetimeStatisticsResponse {
    public Object batchError;
    public JobGetAllJobsLifetimeStatisticsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobGetAllJobsLifetimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobGetAllJobsLifetimeStatisticsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object jobStatistics;
    public JobGetAllJobsLifetimeStatisticsResponse withJobStatistics(Object jobStatistics) {
        this.jobStatistics = jobStatistics;
        return this;
    }
    public Long statusCode;
    public JobGetAllJobsLifetimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}