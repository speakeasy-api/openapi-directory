package openapisdk.models.operations;



public class JoinGroupRequest {
    public JoinGroupPathParams pathParams;
    public JoinGroupRequest withPathParams(JoinGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JoinGroupSecurity security;
    public JoinGroupRequest withSecurity(JoinGroupSecurity security) {
        this.security = security;
        return this;
    }
}