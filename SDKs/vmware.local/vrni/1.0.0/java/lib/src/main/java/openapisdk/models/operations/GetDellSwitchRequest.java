package openapisdk.models.operations;



public class GetDellSwitchRequest {
    public GetDellSwitchPathParams pathParams;
    public GetDellSwitchRequest withPathParams(GetDellSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDellSwitchSecurity security;
    public GetDellSwitchRequest withSecurity(GetDellSwitchSecurity security) {
        this.security = security;
        return this;
    }
}