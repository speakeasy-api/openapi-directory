package openapisdk.models.operations;



public class GetFolderRequest {
    public GetFolderPathParams pathParams;
    public GetFolderRequest withPathParams(GetFolderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFolderHeaders headers;
    public GetFolderRequest withHeaders(GetFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetFolderSecurity security;
    public GetFolderRequest withSecurity(GetFolderSecurity security) {
        this.security = security;
        return this;
    }
}