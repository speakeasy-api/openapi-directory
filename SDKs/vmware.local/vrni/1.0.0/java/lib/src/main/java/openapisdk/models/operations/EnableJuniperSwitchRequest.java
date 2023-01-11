package openapisdk.models.operations;



public class EnableJuniperSwitchRequest {
    public EnableJuniperSwitchPathParams pathParams;
    public EnableJuniperSwitchRequest withPathParams(EnableJuniperSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableJuniperSwitchSecurity security;
    public EnableJuniperSwitchRequest withSecurity(EnableJuniperSwitchSecurity security) {
        this.security = security;
        return this;
    }
}