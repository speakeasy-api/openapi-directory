package openapisdk.models.operations;



public class PostRunWorkflowResponse {
    public String contentType;
    public PostRunWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRunWorkflowResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public PostRunWorkflow400ApplicationJson postRunWorkflow400ApplicationJSONObject;
    public PostRunWorkflowResponse withPostRunWorkflow400ApplicationJsonObject(PostRunWorkflow400ApplicationJson postRunWorkflow400ApplicationJSONObject) {
        this.postRunWorkflow400ApplicationJSONObject = postRunWorkflow400ApplicationJSONObject;
        return this;
    }
    public PostRunWorkflow406ApplicationJson postRunWorkflow406ApplicationJSONObject;
    public PostRunWorkflowResponse withPostRunWorkflow406ApplicationJsonObject(PostRunWorkflow406ApplicationJson postRunWorkflow406ApplicationJSONObject) {
        this.postRunWorkflow406ApplicationJSONObject = postRunWorkflow406ApplicationJSONObject;
        return this;
    }
    public PostRunWorkflow409ApplicationJson postRunWorkflow409ApplicationJSONObject;
    public PostRunWorkflowResponse withPostRunWorkflow409ApplicationJsonObject(PostRunWorkflow409ApplicationJson postRunWorkflow409ApplicationJSONObject) {
        this.postRunWorkflow409ApplicationJSONObject = postRunWorkflow409ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public PostRunWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowInstance workflowInstance;
    public PostRunWorkflowResponse withWorkflowInstance(openapisdk.models.shared.WorkflowInstance workflowInstance) {
        this.workflowInstance = workflowInstance;
        return this;
    }
}