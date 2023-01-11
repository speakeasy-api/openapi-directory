package openapisdk.models.operations;



public class GetBrocadeSwitchRequest {
    public GetBrocadeSwitchPathParams pathParams;
    public GetBrocadeSwitchRequest withPathParams(GetBrocadeSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBrocadeSwitchSecurity security;
    public GetBrocadeSwitchRequest withSecurity(GetBrocadeSwitchSecurity security) {
        this.security = security;
        return this;
    }
}