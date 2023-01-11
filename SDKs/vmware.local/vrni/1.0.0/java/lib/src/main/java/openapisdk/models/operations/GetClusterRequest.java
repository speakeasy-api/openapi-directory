package openapisdk.models.operations;



public class GetClusterRequest {
    public GetClusterPathParams pathParams;
    public GetClusterRequest withPathParams(GetClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetClusterQueryParams queryParams;
    public GetClusterRequest withQueryParams(GetClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetClusterSecurity security;
    public GetClusterRequest withSecurity(GetClusterSecurity security) {
        this.security = security;
        return this;
    }
}