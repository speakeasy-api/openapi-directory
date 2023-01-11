package openapisdk.models.operations;



public class TaskListSubtasksResponse {
    public Object batchError;
    public TaskListSubtasksResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudTaskListSubtasksResult;
    public TaskListSubtasksResponse withCloudTaskListSubtasksResult(Object cloudTaskListSubtasksResult) {
        this.cloudTaskListSubtasksResult = cloudTaskListSubtasksResult;
        return this;
    }
    public String contentType;
    public TaskListSubtasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskListSubtasksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskListSubtasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}