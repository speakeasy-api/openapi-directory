package openapisdk.models.operations;



public class JobScheduleExistsResponse {
    public Object batchError;
    public JobScheduleExistsResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobScheduleExistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleExistsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleExistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}