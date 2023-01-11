package openapisdk.models.operations;



public class EnableDellSwitchRequest {
    public EnableDellSwitchPathParams pathParams;
    public EnableDellSwitchRequest withPathParams(EnableDellSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableDellSwitchSecurity security;
    public EnableDellSwitchRequest withSecurity(EnableDellSwitchSecurity security) {
        this.security = security;
        return this;
    }
}