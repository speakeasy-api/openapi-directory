package openapisdk.models.operations;



public class PostWorkflowsTaskRerunResponse {
    public String contentType;
    public PostWorkflowsTaskRerunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostWorkflowsTaskRerunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostWorkflowsTaskRerunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public PostWorkflowsTaskRerunResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}