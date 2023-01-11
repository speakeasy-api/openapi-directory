package openapisdk.models.operations;



public class DisableNsxvManagerRequest {
    public DisableNsxvManagerPathParams pathParams;
    public DisableNsxvManagerRequest withPathParams(DisableNsxvManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableNsxvManagerSecurity security;
    public DisableNsxvManagerRequest withSecurity(DisableNsxvManagerSecurity security) {
        this.security = security;
        return this;
    }
}