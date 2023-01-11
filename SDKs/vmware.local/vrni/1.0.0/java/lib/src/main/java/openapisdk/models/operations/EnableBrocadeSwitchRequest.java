package openapisdk.models.operations;



public class EnableBrocadeSwitchRequest {
    public EnableBrocadeSwitchPathParams pathParams;
    public EnableBrocadeSwitchRequest withPathParams(EnableBrocadeSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableBrocadeSwitchSecurity security;
    public EnableBrocadeSwitchRequest withSecurity(EnableBrocadeSwitchSecurity security) {
        this.security = security;
        return this;
    }
}