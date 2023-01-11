package openapisdk.models.operations;



public class UpdateRoleRequest {
    public UpdateRolePathParams pathParams;
    public UpdateRoleRequest withPathParams(UpdateRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRoleRequests request;
    public UpdateRoleRequest withRequest(UpdateRoleRequests request) {
        this.request = request;
        return this;
    }
    public UpdateRoleSecurity security;
    public UpdateRoleRequest withSecurity(UpdateRoleSecurity security) {
        this.security = security;
        return this;
    }
}