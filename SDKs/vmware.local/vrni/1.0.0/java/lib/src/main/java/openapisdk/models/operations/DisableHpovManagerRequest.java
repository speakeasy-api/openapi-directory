package openapisdk.models.operations;



public class DisableHpovManagerRequest {
    public DisableHpovManagerPathParams pathParams;
    public DisableHpovManagerRequest withPathParams(DisableHpovManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableHpovManagerSecurity security;
    public DisableHpovManagerRequest withSecurity(DisableHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}