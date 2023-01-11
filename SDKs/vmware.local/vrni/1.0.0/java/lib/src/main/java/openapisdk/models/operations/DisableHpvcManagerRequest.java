package openapisdk.models.operations;



public class DisableHpvcManagerRequest {
    public DisableHpvcManagerPathParams pathParams;
    public DisableHpvcManagerRequest withPathParams(DisableHpvcManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableHpvcManagerSecurity security;
    public DisableHpvcManagerRequest withSecurity(DisableHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}