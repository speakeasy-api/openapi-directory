package openapisdk.models.operations;



public class EnableHpovManagerRequest {
    public EnableHpovManagerPathParams pathParams;
    public EnableHpovManagerRequest withPathParams(EnableHpovManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableHpovManagerSecurity security;
    public EnableHpovManagerRequest withSecurity(EnableHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}