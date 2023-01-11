package openapisdk.models.operations;



public class PutWorkflowsTasksUpdateResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public PutWorkflowsTasksUpdateResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public PutWorkflowsTasksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutWorkflowsTasksUpdateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutWorkflowsTasksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TasksResponse tasksResponse;
    public PutWorkflowsTasksUpdateResponse withTasksResponse(openapisdk.models.shared.TasksResponse tasksResponse) {
        this.tasksResponse = tasksResponse;
        return this;
    }
}