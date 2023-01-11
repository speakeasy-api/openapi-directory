package openapisdk.models.operations;



public class GetWorkflowRequest {
    public GetWorkflowPathParams pathParams;
    public GetWorkflowRequest withPathParams(GetWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkflowHeaders headers;
    public GetWorkflowRequest withHeaders(GetWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
}