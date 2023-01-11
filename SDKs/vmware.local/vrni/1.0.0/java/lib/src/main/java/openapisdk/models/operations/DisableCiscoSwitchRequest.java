package openapisdk.models.operations;



public class DisableCiscoSwitchRequest {
    public DisableCiscoSwitchPathParams pathParams;
    public DisableCiscoSwitchRequest withPathParams(DisableCiscoSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableCiscoSwitchSecurity security;
    public DisableCiscoSwitchRequest withSecurity(DisableCiscoSwitchSecurity security) {
        this.security = security;
        return this;
    }
}