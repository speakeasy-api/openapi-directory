package openapisdk.models.operations;



public class DeleteWorkflowRequest {
    public DeleteWorkflowPathParams pathParams;
    public DeleteWorkflowRequest withPathParams(DeleteWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkflowHeaders headers;
    public DeleteWorkflowRequest withHeaders(DeleteWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
}