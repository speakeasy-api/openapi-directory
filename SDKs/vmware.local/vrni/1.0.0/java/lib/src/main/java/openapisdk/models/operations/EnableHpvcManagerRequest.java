package openapisdk.models.operations;



public class EnableHpvcManagerRequest {
    public EnableHpvcManagerPathParams pathParams;
    public EnableHpvcManagerRequest withPathParams(EnableHpvcManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableHpvcManagerSecurity security;
    public EnableHpvcManagerRequest withSecurity(EnableHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}