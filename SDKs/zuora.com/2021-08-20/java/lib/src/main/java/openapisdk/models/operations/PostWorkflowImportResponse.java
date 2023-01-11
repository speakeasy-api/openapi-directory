package openapisdk.models.operations;



public class PostWorkflowImportResponse {
    public String contentType;
    public PostWorkflowImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostWorkflowImportResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostWorkflowImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Workflow workflow;
    public PostWorkflowImportResponse withWorkflow(openapisdk.models.shared.Workflow workflow) {
        this.workflow = workflow;
        return this;
    }
}