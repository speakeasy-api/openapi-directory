package openapisdk.models.operations;



public class JobScheduleEnableResponse {
    public Object batchError;
    public JobScheduleEnableResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public JobScheduleEnableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobScheduleEnableResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobScheduleEnableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}