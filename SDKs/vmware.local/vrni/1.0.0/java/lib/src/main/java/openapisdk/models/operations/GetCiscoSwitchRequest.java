package openapisdk.models.operations;



public class GetCiscoSwitchRequest {
    public GetCiscoSwitchPathParams pathParams;
    public GetCiscoSwitchRequest withPathParams(GetCiscoSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCiscoSwitchSecurity security;
    public GetCiscoSwitchRequest withSecurity(GetCiscoSwitchSecurity security) {
        this.security = security;
        return this;
    }
}