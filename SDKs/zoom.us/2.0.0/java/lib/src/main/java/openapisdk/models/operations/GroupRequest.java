package openapisdk.models.operations;



public class GroupRequest {
    public GroupPathParams pathParams;
    public GroupRequest withPathParams(GroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupSecurity security;
    public GroupRequest withSecurity(GroupSecurity security) {
        this.security = security;
        return this;
    }
}