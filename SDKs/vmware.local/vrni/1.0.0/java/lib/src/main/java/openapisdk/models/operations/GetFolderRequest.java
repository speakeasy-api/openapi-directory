package openapisdk.models.operations;



public class GetFolderRequest {
    public GetFolderPathParams pathParams;
    public GetFolderRequest withPathParams(GetFolderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFolderQueryParams queryParams;
    public GetFolderRequest withQueryParams(GetFolderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFolderSecurity security;
    public GetFolderRequest withSecurity(GetFolderSecurity security) {
        this.security = security;
        return this;
    }
}