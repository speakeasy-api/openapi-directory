package openapisdk.models.operations;



public class GetUcsSnmpConfigRequest {
    public GetUcsSnmpConfigPathParams pathParams;
    public GetUcsSnmpConfigRequest withPathParams(GetUcsSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUcsSnmpConfigSecurity security;
    public GetUcsSnmpConfigRequest withSecurity(GetUcsSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}