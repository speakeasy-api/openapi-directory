package openapisdk.models.operations;



public class GetApplicationTierRequest {
    public GetApplicationTierPathParams pathParams;
    public GetApplicationTierRequest withPathParams(GetApplicationTierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApplicationTierSecurity security;
    public GetApplicationTierRequest withSecurity(GetApplicationTierSecurity security) {
        this.security = security;
        return this;
    }
}