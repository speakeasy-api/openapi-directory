package openapisdk.models.operations;



public class GetWorkflowsRequest {
    public GetWorkflowsQueryParams queryParams;
    public GetWorkflowsRequest withQueryParams(GetWorkflowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkflowsHeaders headers;
    public GetWorkflowsRequest withHeaders(GetWorkflowsHeaders headers) {
        this.headers = headers;
        return this;
    }
}