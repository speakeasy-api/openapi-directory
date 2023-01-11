package openapisdk.models.operations;



public class TaskTerminateResponse {
    public Object batchError;
    public TaskTerminateResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public TaskTerminateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskTerminateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskTerminateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}