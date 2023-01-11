package openapisdk.models.operations;



public class JobScheduleAddResponse {
    public Object batchError;
    public JobScheduleAddResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobScheduleAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}