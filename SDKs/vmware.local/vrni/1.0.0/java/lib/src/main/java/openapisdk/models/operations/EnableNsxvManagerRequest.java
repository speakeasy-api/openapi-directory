package openapisdk.models.operations;



public class EnableNsxvManagerRequest {
    public EnableNsxvManagerPathParams pathParams;
    public EnableNsxvManagerRequest withPathParams(EnableNsxvManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableNsxvManagerSecurity security;
    public EnableNsxvManagerRequest withSecurity(EnableNsxvManagerSecurity security) {
        this.security = security;
        return this;
    }
}