package openapisdk.models.operations;



public class EnableCiscoSwitchRequest {
    public EnableCiscoSwitchPathParams pathParams;
    public EnableCiscoSwitchRequest withPathParams(EnableCiscoSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableCiscoSwitchSecurity security;
    public EnableCiscoSwitchRequest withSecurity(EnableCiscoSwitchSecurity security) {
        this.security = security;
        return this;
    }
}