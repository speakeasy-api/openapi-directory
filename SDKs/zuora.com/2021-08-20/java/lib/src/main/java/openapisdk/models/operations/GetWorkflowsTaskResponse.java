package openapisdk.models.operations;



public class GetWorkflowsTaskResponse {
    public String contentType;
    public GetWorkflowsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowsTaskResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public GetWorkflowsTaskResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}