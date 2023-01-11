package openapisdk.models.operations;



public class TaskGetResponse {
    public Object batchError;
    public TaskGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudTask;
    public TaskGetResponse withCloudTask(Object cloudTask) {
        this.cloudTask = cloudTask;
        return this;
    }
    public String contentType;
    public TaskGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}