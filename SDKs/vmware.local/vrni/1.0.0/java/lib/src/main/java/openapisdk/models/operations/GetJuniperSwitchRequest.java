package openapisdk.models.operations;



public class GetJuniperSwitchRequest {
    public GetJuniperSwitchPathParams pathParams;
    public GetJuniperSwitchRequest withPathParams(GetJuniperSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJuniperSwitchSecurity security;
    public GetJuniperSwitchRequest withSecurity(GetJuniperSwitchSecurity security) {
        this.security = security;
        return this;
    }
}