package openapisdk.models.operations;



public class JobScheduleGetResponse {
    public Object batchError;
    public JobScheduleGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJobSchedule;
    public JobScheduleGetResponse withCloudJobSchedule(Object cloudJobSchedule) {
        this.cloudJobSchedule = cloudJobSchedule;
        return this;
    }
    public String contentType;
    public JobScheduleGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}