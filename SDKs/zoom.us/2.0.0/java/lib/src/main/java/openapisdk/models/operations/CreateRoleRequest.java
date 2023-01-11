package openapisdk.models.operations;



public class CreateRoleRequest {
    public CreateRoleRequests request;
    public CreateRoleRequest withRequest(CreateRoleRequests request) {
        this.request = request;
        return this;
    }
    public CreateRoleSecurity security;
    public CreateRoleRequest withSecurity(CreateRoleSecurity security) {
        this.security = security;
        return this;
    }
}