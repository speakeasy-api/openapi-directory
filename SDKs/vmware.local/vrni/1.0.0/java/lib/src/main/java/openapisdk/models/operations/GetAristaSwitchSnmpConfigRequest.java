package openapisdk.models.operations;



public class GetAristaSwitchSnmpConfigRequest {
    public GetAristaSwitchSnmpConfigPathParams pathParams;
    public GetAristaSwitchSnmpConfigRequest withPathParams(GetAristaSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAristaSwitchSnmpConfigSecurity security;
    public GetAristaSwitchSnmpConfigRequest withSecurity(GetAristaSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}