package openapisdk.models.operations;



public class JobScheduleListResponse {
    public Object batchError;
    public JobScheduleListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJobScheduleListResult;
    public JobScheduleListResponse withCloudJobScheduleListResult(Object cloudJobScheduleListResult) {
        this.cloudJobScheduleListResult = cloudJobScheduleListResult;
        return this;
    }
    public String contentType;
    public JobScheduleListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}