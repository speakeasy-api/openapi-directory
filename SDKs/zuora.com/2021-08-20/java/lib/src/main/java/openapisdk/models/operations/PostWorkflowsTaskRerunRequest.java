package openapisdk.models.operations;



public class PostWorkflowsTaskRerunRequest {
    public PostWorkflowsTaskRerunPathParams pathParams;
    public PostWorkflowsTaskRerunRequest withPathParams(PostWorkflowsTaskRerunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostWorkflowsTaskRerunHeaders headers;
    public PostWorkflowsTaskRerunRequest withHeaders(PostWorkflowsTaskRerunHeaders headers) {
        this.headers = headers;
        return this;
    }
}