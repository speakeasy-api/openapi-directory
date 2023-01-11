package openapisdk.models.operations;



public class GetWorkflowsTasksRequest {
    public GetWorkflowsTasksQueryParams queryParams;
    public GetWorkflowsTasksRequest withQueryParams(GetWorkflowsTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkflowsTasksHeaders headers;
    public GetWorkflowsTasksRequest withHeaders(GetWorkflowsTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
}