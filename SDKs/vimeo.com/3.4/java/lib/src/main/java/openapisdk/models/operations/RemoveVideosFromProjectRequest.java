package openapisdk.models.operations;



public class RemoveVideosFromProjectRequest {
    public RemoveVideosFromProjectPathParams pathParams;
    public RemoveVideosFromProjectRequest withPathParams(RemoveVideosFromProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveVideosFromProjectQueryParams queryParams;
    public RemoveVideosFromProjectRequest withQueryParams(RemoveVideosFromProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RemoveVideosFromProjectSecurity security;
    public RemoveVideosFromProjectRequest withSecurity(RemoveVideosFromProjectSecurity security) {
        this.security = security;
        return this;
    }
}