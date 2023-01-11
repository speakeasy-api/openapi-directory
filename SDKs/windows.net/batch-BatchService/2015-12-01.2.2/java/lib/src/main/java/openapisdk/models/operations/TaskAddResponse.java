package openapisdk.models.operations;



public class TaskAddResponse {
    public Object batchError;
    public TaskAddResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public TaskAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}