package openapisdk.models.operations;



public class GetJuniperSwitchSnmpConfigRequest {
    public GetJuniperSwitchSnmpConfigPathParams pathParams;
    public GetJuniperSwitchSnmpConfigRequest withPathParams(GetJuniperSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJuniperSwitchSnmpConfigSecurity security;
    public GetJuniperSwitchSnmpConfigRequest withSecurity(GetJuniperSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}