package openapisdk.models.operations;



public class GetNsxvControllerClusterRequest {
    public GetNsxvControllerClusterPathParams pathParams;
    public GetNsxvControllerClusterRequest withPathParams(GetNsxvControllerClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNsxvControllerClusterSecurity security;
    public GetNsxvControllerClusterRequest withSecurity(GetNsxvControllerClusterSecurity security) {
        this.security = security;
        return this;
    }
}