package openapisdk.models.operations;



public class GetBrocadeSwitchSnmpConfigRequest {
    public GetBrocadeSwitchSnmpConfigPathParams pathParams;
    public GetBrocadeSwitchSnmpConfigRequest withPathParams(GetBrocadeSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBrocadeSwitchSnmpConfigSecurity security;
    public GetBrocadeSwitchSnmpConfigRequest withSecurity(GetBrocadeSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}