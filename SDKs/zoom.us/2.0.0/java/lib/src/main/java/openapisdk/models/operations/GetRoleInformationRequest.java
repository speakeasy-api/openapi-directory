package openapisdk.models.operations;



public class GetRoleInformationRequest {
    public GetRoleInformationPathParams pathParams;
    public GetRoleInformationRequest withPathParams(GetRoleInformationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRoleInformationSecurity security;
    public GetRoleInformationRequest withSecurity(GetRoleInformationSecurity security) {
        this.security = security;
        return this;
    }
}