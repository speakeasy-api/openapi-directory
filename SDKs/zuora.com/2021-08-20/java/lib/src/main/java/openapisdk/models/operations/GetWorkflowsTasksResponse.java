package openapisdk.models.operations;



public class GetWorkflowsTasksResponse {
    public String contentType;
    public GetWorkflowsTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowsTasksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowsTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TasksResponse tasksResponse;
    public GetWorkflowsTasksResponse withTasksResponse(openapisdk.models.shared.TasksResponse tasksResponse) {
        this.tasksResponse = tasksResponse;
        return this;
    }
}