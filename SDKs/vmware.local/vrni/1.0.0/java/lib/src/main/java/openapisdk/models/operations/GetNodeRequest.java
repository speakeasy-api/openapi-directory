package openapisdk.models.operations;



public class GetNodeRequest {
    public GetNodePathParams pathParams;
    public GetNodeRequest withPathParams(GetNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNodeSecurity security;
    public GetNodeRequest withSecurity(GetNodeSecurity security) {
        this.security = security;
        return this;
    }
}