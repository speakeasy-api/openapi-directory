package openapisdk.models.operations;



public class GetFlowsRequest {
    public GetFlowsQueryParams queryParams;
    public GetFlowsRequest withQueryParams(GetFlowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFlowsSecurity security;
    public GetFlowsRequest withSecurity(GetFlowsSecurity security) {
        this.security = security;
        return this;
    }
}