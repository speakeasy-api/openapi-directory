package openapisdk.models.operations;



public class GetApplicationRequest {
    public GetApplicationPathParams pathParams;
    public GetApplicationRequest withPathParams(GetApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApplicationSecurity security;
    public GetApplicationRequest withSecurity(GetApplicationSecurity security) {
        this.security = security;
        return this;
    }
}