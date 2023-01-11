package openapisdk.models.operations;



public class JobListFromJobScheduleResponse {
    public Object batchError;
    public JobListFromJobScheduleResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJobListResult;
    public JobListFromJobScheduleResponse withCloudJobListResult(Object cloudJobListResult) {
        this.cloudJobListResult = cloudJobListResult;
        return this;
    }
    public String contentType;
    public JobListFromJobScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobListFromJobScheduleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobListFromJobScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}