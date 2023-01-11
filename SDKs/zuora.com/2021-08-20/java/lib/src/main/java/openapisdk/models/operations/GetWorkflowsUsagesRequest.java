package openapisdk.models.operations;



public class GetWorkflowsUsagesRequest {
    public GetWorkflowsUsagesQueryParams queryParams;
    public GetWorkflowsUsagesRequest withQueryParams(GetWorkflowsUsagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkflowsUsagesHeaders headers;
    public GetWorkflowsUsagesRequest withHeaders(GetWorkflowsUsagesHeaders headers) {
        this.headers = headers;
        return this;
    }
}