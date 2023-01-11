package openapisdk.models.operations;



public class JobScheduleTerminateResponse {
    public Object batchError;
    public JobScheduleTerminateResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobScheduleTerminateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleTerminateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleTerminateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}