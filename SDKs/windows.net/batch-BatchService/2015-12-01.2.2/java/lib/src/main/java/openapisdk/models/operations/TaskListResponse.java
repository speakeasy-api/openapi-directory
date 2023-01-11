package openapisdk.models.operations;



public class TaskListResponse {
    public Object batchError;
    public TaskListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudTaskListResult;
    public TaskListResponse withCloudTaskListResult(Object cloudTaskListResult) {
        this.cloudTaskListResult = cloudTaskListResult;
        return this;
    }
    public String contentType;
    public TaskListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}