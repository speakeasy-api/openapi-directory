package openapisdk.models.operations;



public class DisableUcsManagerRequest {
    public DisableUcsManagerPathParams pathParams;
    public DisableUcsManagerRequest withPathParams(DisableUcsManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableUcsManagerSecurity security;
    public DisableUcsManagerRequest withSecurity(DisableUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}