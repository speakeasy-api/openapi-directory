package openapisdk.models.operations;



public class RemoveVideoFromProjectRequest {
    public RemoveVideoFromProjectPathParams pathParams;
    public RemoveVideoFromProjectRequest withPathParams(RemoveVideoFromProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveVideoFromProjectSecurity security;
    public RemoveVideoFromProjectRequest withSecurity(RemoveVideoFromProjectSecurity security) {
        this.security = security;
        return this;
    }
}